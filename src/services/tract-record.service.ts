// tract-record.service.ts
import { PrismaClient, Stakeholder } from '@prisma/client';
import {TractFormUpdateDTO} from "../dtos/tract-record.dto";

class TractRecordService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // Update tract record by id
    async updateTractRecordById(tractId: number, updateDto: TractFormUpdateDTO) {
        try {
            return await this.prisma.tractRecord.update({
                where: { id: tractId },
                data: {
                    structure: updateDto.structure,
                    interest: updateDto.interest,
                    occupants: updateDto.occupants,
                    worksLand: updateDto.worksLand,
                    tractComments: updateDto.tractComments,
                },
            });
        } catch (error: any) {
            if (error.code === 'P2025') {
                // Handle custom error when tract is not found
                throw new Error('Tract not found');
            }
            throw error; // Re-throw other errors
        }
    }

    // Grabs the Stakeholders and TractRecords for a given tract number and project id
    async getStakeholdersWithTractRecordsByTractNo(projectId: number, tractNo: number): Promise<Stakeholder[]> {
        try {
            return await this.prisma.stakeholder.findMany({
                where: {
                    projectId,
                    tractRecords: {
                        some: {
                            tract: {
                                equals: tractNo,
                            },
                        },
                    },
                },
                include: {
                    tractRecords: {
                        where: {
                            tract: {
                                equals: tractNo,
                            },
                        },
                    },
                },
            });
        } catch (error) {
            console.error('Error fetching stakeholders:', error);
            throw new Error('Failed to fetch stakeholders');
        }
    }
}

export default TractRecordService;