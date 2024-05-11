import {PrismaClient, Stakeholder, TractRecord} from "@prisma/client";
import {StakeholderUpdateDTO} from "../dtos/stakeholder.dto";
import {StakeholderWithTractRecords} from "../dtos/stakeholder.dto";

export class StakeholderService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // Update a stakeholder by id
    async updateStakeholderById(stakeholderId: number, updatedData: StakeholderUpdateDTO): Promise<Stakeholder | null> {
        try {
            return await this.prisma.stakeholder.update({
                where: {id: stakeholderId},
                data: updatedData,
            });
        } catch (error) {
            console.error('Error updating stakeholder:', error);
            throw new Error('Failed to update stakeholder');
        }
    }

    async getStakeholdersByProjectId(projectId: number): Promise<StakeholderWithTractRecords[]> {
        try {
            // Fetch stakeholders with tract records by project ID and order by stakeholder ID
            return await this.prisma.stakeholder.findMany({
                where: {projectId},
                include: {
                    tractRecords: true,
                },
                orderBy: {
                    id: 'asc', // You can use 'desc' for descending order
                },
            });
        } catch (error) {
            console.error('Error fetching stakeholders with details:', error);
            throw new Error('Internal Server Error');
        }
    }


// Fetch a stakeholder by ID including tractRecords ordered by id
    async getStakeholderById(stakeholderId: number): Promise<StakeholderWithTractRecords | null> {
        try {
            return await this.prisma.stakeholder.findUnique({
                where: {id: stakeholderId},
                include: {
                    tractRecords: {
                        orderBy: {
                            id: 'asc', // Order tractRecords by id in ascending order
                        },
                    },
                },
            });
        } catch (error) {
            console.error('Error fetching stakeholder:', error);
            throw new Error('Failed to fetch stakeholder');
        }
    }


    // Update stakeholder with the new package ID
    async updateStakeholderPackageId(stakeholderId: number, packageId: number): Promise<void> {
        await this.prisma.stakeholder.update({
            where: {id: stakeholderId},
            data: {packageId: packageId},
        });
    }

    // Updated stakeholder consultation by delivery ID
    async updateStakeholderConsultationByDeliveryId(deliveryId: number, consultation: string): Promise<void> {
        try {
            // Find packages associated with the delivery ID
            const packages = await this.prisma.package.findMany({
                where: {
                    deliveryId: deliveryId,
                },
                include: {
                    stakeholder: true,
                },
            });

            // Update stakeholder consultation for each stakeholder
            for (const pkg of packages) {
                if (pkg.stakeholder) {
                    await this.prisma.stakeholder.update({
                        where: {
                            id: pkg.stakeholderId,
                        },
                        data: {
                            consultation: consultation,
                        },
                    });
                }
            }

            console.log('Stakeholder consultation updated successfully');
        } catch (error) {
            console.error('Error updating stakeholder consultation:', error);
            throw new Error('Failed to update stakeholder consultation');
        }
    }

    // Fetch all unique street addresses for stakeholders by projectId
    async getAllUniqueStreetAddresses(projectId: number): Promise<string[]> {
        try {
            const uniqueAddresses = await this.prisma.stakeholder.findMany({
                where: {
                    projectId: projectId,
                },
                distinct: ["streetAddress"],
            });
            return uniqueAddresses.map((stakeholder) => stakeholder.streetAddress);
        } catch (error) {
            console.error("Error fetching unique street addresses:", error);
            throw new Error("Failed to fetch unique street addresses");
        }
    }
}