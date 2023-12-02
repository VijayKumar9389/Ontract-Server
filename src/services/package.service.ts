import { DeliveryDTO, PackageTypeDTO } from '../dtos/delivery.dto';
import { PrismaClient, Package, PackageType } from '@prisma/client';

class PackageService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async createNewPackage(deliveryData: DeliveryDTO, deliveryId: number): Promise<Package> {
        return this.prisma.package.create({
            data: {
                stakeholderId: deliveryData.stakeholderId,
                packageTypeId: deliveryData.packageTypeId,
                deliveryId: deliveryId,
            },
        });
    }

    async createPackageType(packageTypeDTO: PackageTypeDTO): Promise<PackageType> {
        return this.prisma.packageType.create({ data: packageTypeDTO });
    }

    async getAllPackageTypes(): Promise<PackageType[]> {
        return this.prisma.packageType.findMany();
    }

    async deletePackageType(id: number): Promise<PackageType> {
        return this.prisma.packageType.delete({ where: { id } });
    }
}

export default PackageService;
