"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tract-record.service.ts
const client_1 = require("@prisma/client");
class TractRecordService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    // Update tract record by id
    updateTractRecordById(tractId, updateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.tractRecord.update({
                    where: { id: tractId },
                    data: {
                        structure: updateDto.structure,
                        interest: updateDto.interest,
                        occupants: updateDto.occupants,
                        worksLand: updateDto.worksLand,
                        tractComments: updateDto.tractComments,
                    },
                });
            }
            catch (error) {
                if (error.code === 'P2025') {
                    // Handle custom error when tract is not found
                    throw new Error('Tract not found');
                }
                throw error; // Re-throw other errors
            }
        });
    }
    // Grabs the Stakeholders and TractRecords for a given tract number and project id
    getStakeholdersWithTractRecordsByTractNo(projectId, tractNo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.stakeholder.findMany({
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
            }
            catch (error) {
                console.error('Error fetching stakeholders:', error);
                throw new Error('Failed to fetch stakeholders');
            }
        });
    }
    // Fetch stakeholders with tract records by project ID
    getTractRecordsByProjectWithStakeholders(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.stakeholder.findMany({
                    where: {
                        projectId,
                    },
                    include: {
                        tractRecords: true,
                    },
                });
            }
            catch (error) {
                console.error('Error fetching stakeholders:', error);
                throw new Error('Failed to fetch stakeholders');
            }
        });
    }
}
exports.default = TractRecordService;
