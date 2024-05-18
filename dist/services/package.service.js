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
const client_1 = require("@prisma/client");
const stakeholder_service_1 = require("./stakeholder.service");
class PackageService {
    // Initialize the Prisma client
    constructor() {
        this.prisma = new client_1.PrismaClient();
        this.stakeholderService = new stakeholder_service_1.StakeholderService();
    }
    // Create a new package for a new delivery
    createNewPackage(deliveryData, deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create a new package
                const newPackage = yield this.prisma.package.create({
                    data: {
                        stakeholderId: deliveryData.stakeholderId,
                        packageTypeId: deliveryData.packageTypeId,
                        deliveryId: deliveryId,
                    },
                });
                yield this.stakeholderService.updateStakeholderPackageId(deliveryData.stakeholderId, newPackage.id);
                return newPackage;
            }
            catch (error) {
                console.error('Error creating package for new delivery:', error);
                throw new Error('Failed to create package for new delivery');
            }
        });
    }
    // Create a new package for an existing delivery
    createPackageForExistingDelivery(stakeholderId, packageTypeId, deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create a new package
                const newPackage = yield this.prisma.package.create({
                    data: {
                        stakeholderId,
                        packageTypeId,
                        deliveryId,
                    },
                });
                // Update stakeholder with the new package ID
                yield this.stakeholderService.updateStakeholderPackageId(stakeholderId, newPackage.id);
                return newPackage;
            }
            catch (error) {
                console.error('Error creating package for existing delivery:', error);
                throw new Error('Failed to create package for existing delivery');
            }
        });
    }
    // Cancel a package and reset the stakeholder package ID to null
    cancelPackage(packageId, stakeholderId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find the package to be removed
                const packageToRemove = yield this.prisma.package.findUnique({
                    where: { id: packageId },
                });
                if (!packageToRemove) {
                    throw new Error('Package not found');
                }
                // Remove the package
                yield this.prisma.package.delete({
                    where: { id: packageId },
                });
                // Set stakeholder's package ID to null
                yield this.prisma.stakeholder.update({
                    where: { id: stakeholderId },
                    data: {
                        packageId: null,
                    },
                });
            }
            catch (error) {
                console.error('Error removing package and setting stakeholder package ID to null:', error);
                throw new Error('Failed to remove package and set stakeholder package ID to null');
            }
        });
    }
    // Fetch all packages for a delivery
    createPackageType(projectId, packageTypeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.packageType.create({
                data: Object.assign(Object.assign({}, packageTypeDTO), { projectId: parseInt(projectId, 10) }),
            });
        });
    }
    // update package type
    updatePackageType(packageTypeId, packageTypeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.packageType.update({
                where: { id: packageTypeId },
                data: packageTypeDTO,
            });
        });
    }
    // Change the package type for a package
    changePackagePackageType(packageId, packageTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.package.update({
                where: { id: packageId },
                data: {
                    packageTypeId,
                },
            });
        });
    }
    getPackageByPackageTypeId(packageTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.package.findMany({
                where: {
                    packageTypeId,
                },
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
                    delivery: true, // Include the related delivery
                    stakeholder: true,
                },
            });
        });
    }
    getPackageByPackageItemId(packageItemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.package.findMany({
                where: {
                    packageType: {
                        items: {
                            some: {
                                item: {
                                    id: packageItemId,
                                },
                            },
                        },
                    },
                },
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
                    delivery: true, // Include the related delivery
                    stakeholder: true,
                },
            });
        });
    }
    getPackageTypeById(packageTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.packageType.findUnique({
                where: { id: packageTypeId },
                include: {
                    items: {
                        include: {
                            item: true, // Include the Item object
                        },
                    },
                },
            });
        });
    }
    // Fetch all package types for a project
    getAllPackageTypes(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.prisma.packageType.findMany({
                    where: {
                        projectId: parseInt(projectId, 10), // Assuming projectId is of type number
                    },
                    include: {
                        items: {
                            include: {
                                item: true, // Include the Item object
                            },
                        },
                    },
                });
            }
            catch (error) {
                console.error('Error fetching package types:', error);
                throw new Error('Failed to fetch package types');
            }
        });
    }
    deletePackageType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packageType = yield this.prisma.packageType.findUnique({
                    where: { id },
                    include: { items: true },
                });
                if (!packageType) {
                    throw new Error('Package type not found');
                }
                // Check if any deliveries are associated with packages of this package type
                const deliveriesWithPackageType = yield this.prisma.delivery.findFirst({
                    where: { packages: { some: { packageTypeId: id } } },
                });
                if (deliveriesWithPackageType) {
                    throw new Error('Cannot delete package type. Deliveries are associated with packages of this type.');
                }
                // Delete associated PackageItems first
                yield this.prisma.packageItem.deleteMany({
                    where: { packageTypeId: id },
                });
                // Now delete the package type
                yield this.prisma.packageType.delete({ where: { id } });
            }
            catch (error) {
                console.error('Error deleting package type and associated items:', error);
                throw new Error('Failed to delete package type and associated items');
            }
        });
    }
}
exports.default = PackageService;
