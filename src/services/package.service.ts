import {CreateDeliveryDTO, PackageTypeDTO} from '../dtos/delivery.dto';
import {PrismaClient, Package, PackageType} from '@prisma/client';
import {StakeholderService} from './stakeholder.service';

class PackageService {
    private prisma: PrismaClient;
    private stakeholderService: StakeholderService;

    // Initialize the Prisma client
    constructor() {
        this.prisma = new PrismaClient();
        this.stakeholderService = new StakeholderService();
    }

    // Create a new package for a new delivery
    async createNewPackage(deliveryData: CreateDeliveryDTO, deliveryId: number): Promise<Package> {
        try {
            // Create a new package
            const newPackage: Package = await this.prisma.package.create({
                data: {
                    stakeholderId: deliveryData.stakeholderId,
                    packageTypeId: deliveryData.packageTypeId,
                    deliveryId: deliveryId,
                },
            });

            await this.stakeholderService.updateStakeholderPackageId(deliveryData.stakeholderId, newPackage.id);
            return newPackage;
        } catch (error) {
            console.error('Error creating package for new delivery:', error);
            throw new Error('Failed to create package for new delivery');
        }
    }


    // Create a new package for an existing delivery
    async createPackageForExistingDelivery(stakeholderId: number, packageTypeId: number, deliveryId: number): Promise<Package> {
        try {
            // Create a new package
            const newPackage: Package = await this.prisma.package.create({
                data: {
                    stakeholderId,
                    packageTypeId,
                    deliveryId,
                },
            });

            // Update stakeholder with the new package ID
            await this.stakeholderService.updateStakeholderPackageId(stakeholderId, newPackage.id);
            return newPackage;
        } catch (error) {
            console.error('Error creating package for existing delivery:', error);

            throw new Error('Failed to create package for existing delivery');
        }
    }

    // Cancel a package and reset the stakeholder package ID to null
    async cancelPackage(packageId: number, stakeholderId: number): Promise<void> {
        try {
            // Find the package to be removed
            const packageToRemove = await this.prisma.package.findUnique({
                where: {id: packageId},
            });

            if (!packageToRemove) {
                throw new Error('Package not found');
            }

            // Remove the package
            await this.prisma.package.delete({
                where: {id: packageId},
            });

            // Set stakeholder's package ID to null
            await this.prisma.stakeholder.update({
                where: {id: stakeholderId},
                data: {
                    packageId: null,
                },
            });

        } catch (error) {
            console.error('Error removing package and setting stakeholder package ID to null:', error);
            throw new Error('Failed to remove package and set stakeholder package ID to null');
        }
    }

    // Fetch all packages for a delivery
    async createPackageType(projectId: string, packageTypeDTO: PackageTypeDTO): Promise<PackageType> {
        return this.prisma.packageType.create({
            data: {
                ...packageTypeDTO,
                projectId: parseInt(projectId, 10), // Assuming projectId is of type number
            },
        });
    }

    // Change the package type for a package
    async changePackagePackageType(packageId: number, packageTypeId: number): Promise<Package> {
        return this.prisma.package.update({
            where: {id: packageId},
            data: {
                packageTypeId,
            },
        });
    }

    async getPackageByPackageTypeId(packageTypeId: number): Promise<Package[]> {
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
    }


    async getPackageByPackageItemId(packageItemId: number): Promise<Package[]> {
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
    }



    async getPackageTypeById(packageTypeId: number): Promise<PackageType | null> {
        return this.prisma.packageType.findUnique({
            where: {id: packageTypeId},
            include: {
                items: {
                    include: {
                        item: true, // Include the Item object
                    },
                },
            },
        });
    }

    // Fetch all package types for a project
    async getAllPackageTypes(projectId: string): Promise<PackageType[]> {
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
        } catch (error) {
            console.error('Error fetching package types:', error);
            throw new Error('Failed to fetch package types');
        }
    }

    // Delete package type and all associated items
    async deletePackageType(id: number): Promise<void> {
        try {
            const packageType = await this.prisma.packageType.findUnique({
                where: {
                    id: id,
                },
                include: {
                    items: true,
                },
            });

            if (!packageType) {
                throw new Error('Package type not found');
            }

            if (packageType.items.length > 0) {
                throw new Error('Package type is associated with package items. Cannot delete.');
            }

            await this.prisma.packageType.delete({
                where: {
                    id: id,
                },
            });

        } catch (error) {
            console.error('Error deleting package type and associated items:', error);
            throw new Error('Failed to delete package type and associated items');
        }
    }
}

export default PackageService;
