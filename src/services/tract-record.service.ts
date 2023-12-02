// tract-record.service.ts
import { PrismaClient, Stakeholder } from '@prisma/client';

export class TractRecordService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getStakeholdersByProjectIdAndTractRecord(projectId: number, tractNo: number): Promise<Stakeholder[]> {
        try {
            const stakeholders: Stakeholder[] = await this.prisma.stakeholder.findMany({
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
            });

            return stakeholders;
        } catch (error) {
            console.error('Error fetching stakeholders:', error);
            throw new Error('Failed to fetch stakeholders');
        }
    }
}
