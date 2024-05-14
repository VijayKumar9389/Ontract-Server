// delivery.service.ts
import {PrismaClient, Delivery, Package} from '../../prisma-client';
import {CreateDeliveryDTO, DeliveryWithNestedObjects} from '../dtos/delivery.dto';
import PackageService from './package.service';
import {StakeholderService} from "./stakeholder.service";

// Edit delivery details
export interface EditDeliveryDTO {
    route: string;
    destination: string;
    delivery_method: string;
    notes: string;
}

class DeliveryService {
    private packageService: PackageService;
    private prisma: PrismaClient;

    constructor() {
        this.packageService = new PackageService();
        this.prisma = new PrismaClient();
    }

    // Create a new delivery
    async createDelivery(deliveryData: CreateDeliveryDTO): Promise<Delivery | null> {
        try {
            const currentDate: Date = new Date();
            const newDelivery: Delivery = await this.createNewDelivery(deliveryData, currentDate);
            const newPackage: Package = await this.packageService.createNewPackage(deliveryData, newDelivery.id);
            return this.fetchDeliveryWithPackages(newDelivery.id);
        } catch (error: any) {
            console.error('Error creating delivery:', error);
            return null;
        }
    }

    // Cancel a delivery and delete associated packages
    async cancelDelivery(deliveryId: number): Promise<void> {
        try {
            // Retrieve the delivery to get associated packages, packageType, items, and stakeholder
            const delivery = await this.prisma.delivery.findUnique({
                where: { id: deliveryId },
                include: {
                    packages: {
                        include: {
                            packageType: {
                                include: {
                                    items: {
                                        include: {
                                            item: true,
                                        },
                                    },
                                },
                            },
                            stakeholder: true,
                        },
                    },
                },
            });

            // Throw an error if the delivery is not found
            if (!delivery) {
                throw new Error(`Delivery with ID ${deliveryId} not found.`);
            }

            // Cancel each associated package
            for (const deliveryPackage of delivery.packages) {
                await this.packageService.cancelPackage(deliveryPackage.id, deliveryPackage.stakeholderId);
            }

            // Additional logic for canceling the delivery
            await this.prisma.delivery.delete({
                where: { id: deliveryId },
            });

        } catch (error) {
            console.error('Error canceling delivery and deleting packages:', error);
            throw new Error('Failed to cancel delivery and delete packages');
        }
    }

    async setCompletedDelivery(deliveryId: number, date: string): Promise<Delivery | null> {
        try {
            const updatedDelivery: Delivery = await this.prisma.delivery.update({
                where: { id: deliveryId },
                data: {
                    completed: true,
                    date: date,
                },
            });
            return this.fetchDeliveryWithPackages(deliveryId);
        } catch (error) {
            console.error('Error setting delivery completed:', error);
            return null;
        }
    }

    // Create a new delivery in the database
    private async createNewDelivery(deliveryData: CreateDeliveryDTO, currentDate: Date): Promise<Delivery> {
        return this.prisma.delivery.create({
            data: {
                date: null,
                route: deliveryData.route,
                destination: deliveryData.destination,
                notes: deliveryData.notes,
                delivery_method: deliveryData.delivery_method, // Include new field
                carrier: null, // Include new field
                completed: false, // Include new field
                projectId: deliveryData.projectId,
            },
            include: {
                packages: true,
            },
        });
    }

    // Edit a delivery in the database
    async editDelivery(deliveryId: number, deliveryData: EditDeliveryDTO): Promise<Delivery | null> {
        try {
            // Update the delivery with the new data
            await this.prisma.delivery.update({
                where: { id: deliveryId },
                data: {
                    route: deliveryData.route,
                    destination: deliveryData.destination,
                    delivery_method: deliveryData.delivery_method,
                    notes: deliveryData.notes,
                },
            });

            // Fetch the updated delivery with its packages
            return this.fetchDeliveryWithPackages(deliveryId);
        } catch (error) {
            console.error('Error editing delivery:', error);
            return null;
        }
    }


    // Fetch a delivery with its packages from the database
    private async fetchDeliveryWithPackages(deliveryId: number): Promise<Delivery | null> {
        return this.prisma.delivery.findUnique({
            where: {
                id: deliveryId
            },
            include: {
                packages: true,
            },
        });
    }

    async getDeliveryById(deliveryId: number): Promise<Delivery | null> {
        try {
            // Fetch a single delivery with the specified id
            return await this.prisma.delivery.findUnique({
                where: {
                    id: deliveryId,
                },
                include: {
                    packages: {
                        include: {
                            packageType: {
                                include: {
                                    items: {
                                        include: {
                                            item: true, // Include the Item object
                                        },
                                    },
                                },
                            },
                            stakeholder: true,
                        },
                    },
                    // Include other relations or fields as needed
                },
            });
        } catch (error) {
            console.error('Error fetching delivery by id:', error);
            throw new Error('Failed to fetch delivery by id');
        }
    }

// Fetch a delivery from the database by its id
    async getDeliveryByPackageId(packageId: number): Promise<Delivery | null> {
        try {
            // Fetch a single delivery with the specified packageId
            return await this.prisma.delivery.findFirst({
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
                            packageType: {
                                include: {
                                    items: {
                                        include: {
                                            item: true, // Include the Item object
                                        },
                                    }
                                },
                            },
                            stakeholder: true,
                        },
                    },
                    // Include other relations or fields as needed
                },
            });
        } catch (error) {
            console.error('Error fetching delivery by packageId:', error);
            throw new Error('Failed to fetch delivery by packageId');
        }
    }


    // Fetch all deliveries from the database by projectId
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
                            packageType: {
                                include: {
                                    items: {
                                        include: {
                                            item: true, // Include the Item object
                                        },
                                    },
                                },
                            },
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

