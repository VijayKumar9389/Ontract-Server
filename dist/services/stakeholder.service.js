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
exports.StakeholderService = void 0;
const client_1 = require("@prisma/client");
class StakeholderService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    // Update a stakeholder by id
    updateStakeholderById(stakeholderId, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.stakeholder.update({
                    where: { id: stakeholderId },
                    data: updatedData,
                });
            }
            catch (error) {
                console.error('Error updating stakeholder:', error);
                throw new Error('Failed to update stakeholder');
            }
        });
    }
    getStakeholdersByProjectId(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch stakeholders with tract records by project ID and order by stakeholder ID
                return yield this.prisma.stakeholder.findMany({
                    where: { projectId },
                    include: {
                        tractRecords: true,
                    },
                    orderBy: {
                        id: 'asc', // You can use 'desc' for descending order
                    },
                });
            }
            catch (error) {
                console.error('Error fetching stakeholders with details:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    // Fetch a stakeholder by ID including tractRecords ordered by id
    getStakeholderById(stakeholderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.stakeholder.findUnique({
                    where: { id: stakeholderId },
                    include: {
                        tractRecords: {
                            orderBy: {
                                id: 'asc', // Order tractRecords by id in ascending order
                            },
                        },
                    },
                });
            }
            catch (error) {
                console.error('Error fetching stakeholder:', error);
                throw new Error('Failed to fetch stakeholder');
            }
        });
    }
    // Update stakeholder with the new package ID
    updateStakeholderPackageId(stakeholderId, packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prisma.stakeholder.update({
                where: { id: stakeholderId },
                data: { packageId: packageId },
            });
        });
    }
    // Updated stakeholder consultation by delivery ID
    updateStakeholderConsultationByDeliveryId(deliveryId, consultation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find packages associated with the delivery ID
                const packages = yield this.prisma.package.findMany({
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
                        yield this.prisma.stakeholder.update({
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
            }
            catch (error) {
                console.error('Error updating stakeholder consultation:', error);
                throw new Error('Failed to update stakeholder consultation');
            }
        });
    }
    // Fetch all unique street addresses for stakeholders by projectId
    getAllUniqueStreetAddresses(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uniqueAddresses = yield this.prisma.stakeholder.findMany({
                    where: {
                        projectId: projectId,
                    },
                    distinct: ["streetAddress"],
                });
                return uniqueAddresses.map((stakeholder) => stakeholder.streetAddress);
            }
            catch (error) {
                console.error("Error fetching unique street addresses:", error);
                throw new Error("Failed to fetch unique street addresses");
            }
        });
    }
}
exports.StakeholderService = StakeholderService;
