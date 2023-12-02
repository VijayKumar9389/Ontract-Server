import {PrismaClient, Stakeholder} from "@prisma/client";
import {StakeholderUpdateDTO} from "../dtos/stakeholder.dto";

export class StakeholderService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async updateStakeholderById(stakeholderId: number, updatedData: StakeholderUpdateDTO): Promise<Stakeholder | null> {
        try {
            return await this.prisma.stakeholder.update({
                where: { id: stakeholderId },
                data: updatedData,
            });
        } catch (error) {
            console.error('Error updating stakeholder:', error);
            throw new Error('Failed to update stakeholder');
        }
    }

    async updateStakeholderPackageId(stakeholderId: number, packageId: number): Promise<void> {
        await this.prisma.stakeholder.update({
            where: {id: stakeholderId},
            data: {packageId: packageId},
        });
    }

}