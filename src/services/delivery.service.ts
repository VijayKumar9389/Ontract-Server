// delivery.service.ts
import { PrismaClient, Delivery, Package } from '@prisma/client';
import { DeliveryDTO } from '../dtos/delivery.dto';
import PackageService from './package.service';
import {StakeholderService} from "./stakeholder.service";

class DeliveryService {
    private stakeholderService: StakeholderService;
    private packageService: PackageService;
    private prisma: PrismaClient;

    constructor() {
        this.packageService = new PackageService();
        this.stakeholderService = new StakeholderService();
        this.prisma = new PrismaClient();
    }

    async createDelivery(deliveryData: DeliveryDTO): Promise<Delivery | null> {
        try {
            const currentDate: Date = new Date();
            const newDelivery: Delivery = await this.createNewDelivery(deliveryData, currentDate);
            const newPackage: Package = await this.packageService.createNewPackage(deliveryData, newDelivery.id);
            await this.stakeholderService.updateStakeholderPackageId(deliveryData.stakeholderId, newPackage.id);
            return this.fetchDeliveryWithPackages(newDelivery.id);
        } catch (error: any) {
            console.error('Error creating delivery:', error);
            return null;
        }
    }

    private async createNewDelivery(deliveryData: DeliveryDTO, currentDate: Date): Promise<Delivery> {
        return this.prisma.delivery.create({
            data: {
                date: currentDate.toISOString(),
                status: deliveryData.status,
                route: deliveryData.route,
                destination: deliveryData.destination,
                notes: deliveryData.notes,
                projectId: deliveryData.projectId,
            },
            include: {
                packages: true,
            },
        });
    }

    private async fetchDeliveryWithPackages(deliveryId: number): Promise<Delivery | null> {
        return this.prisma.delivery.findUnique({
            where: { id: deliveryId },
            include: {
                packages: true,
            },
        });
    }

    async getDeliveriesByPackageId(packageId: number): Promise<Delivery[]> {
        try {
            // Fetch deliveries with the specified packageId
            return await this.prisma.delivery.findMany({
                where: {
                    packages: {
                        some: {
                            id: packageId,
                        },
                    },
                },
                include: {
                    packages: {
                        include: {
                            packageType: true,
                            stakeholder: true,
                        },
                    },
                    // Include other relations or fields as needed
                },
            });
        } catch (error) {
            console.error('Error fetching deliveries by packageId:', error);
            throw new Error('Failed to fetch deliveries by packageId');
        }
    }

    async getDeliveriesByProjectId(projectId: number): Promise<Delivery[]> {
        try {
            // Fetch deliveries with the specified projectId
            return await this.prisma.delivery.findMany({
                where: {
                    project: {
                        id: projectId,
                    },
                },
                include: {
                    packages: {
                        include: {
                            packageType: true,
                            stakeholder: true,
                        },
                    },
                    // Include other relations or fields as needed
                },
            });
        } catch (error) {
            console.error('Error fetching deliveries by projectId:', error);
            throw new Error('Failed to fetch deliveries by projectId');
        }
    }
}

export default DeliveryService;

