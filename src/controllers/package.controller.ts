// PackageTypeController.ts
import { Request, Response } from 'express';
import PackageService from "../services/package.service"; // Adjust the path based on your actual structure
import { PackageTypeDTO } from '../dtos/delivery.dto';
import { PackageAddDTO } from '../dtos/package.dto';
import {PackageType} from "@prisma/client";

export class PackageController {
    private packageService: PackageService;

    constructor() {
        this.packageService = new PackageService();
    }

    //Create a new package type
    async createPackageType(req: Request, res: Response): Promise<void> {
        try {
            // Extract projectId from request parameters
            const { projectId } = req.params;
            const packageTypeDTO: PackageTypeDTO = req.body;

            // Assuming your packageService.createPackageType function now requires projectId
            const createdPackageType: PackageType = await this.packageService.createPackageType(projectId, packageTypeDTO);

            // Respond with the created package type
            res.status(201).json(createdPackageType);
        } catch (error) {
            console.error(error);
            // Handle errors and respond with an appropriate error message
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Change a package's package type
    async changePackagePackageType(req: Request, res: Response): Promise<void> {
        try {
            const { packageId, packageTypeId } = req.params;
            await this.packageService.changePackagePackageType(parseInt(packageId, 10), parseInt(packageTypeId, 10));
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Cancel a package
    async cancelPackage(req: Request, res: Response): Promise<void> {
        try {
            const { packageId, stakeholderId } = req.params;
            await this.packageService.cancelPackage(parseInt(packageId, 10), parseInt(stakeholderId, 10));
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Create a new package and add it to an existing delivery
    async createPackageForExistingDelivery(req: Request, res: Response): Promise<void> {
        try {
            // Extract data from the request body using the PackageAddDTO
            const { packageTypeId, deliveryId, stakeholderId }: PackageAddDTO = req.body;

            // Call the service method to create a new package for an existing delivery
            const newPackage = await this.packageService.createPackageForExistingDelivery(
                parseInt(stakeholderId),  // Assuming stakeholderId is a number
                parseInt(packageTypeId),
                parseInt(deliveryId)
            );

            // Respond with the created package
            res.status(201).json(newPackage);
        } catch (error) {
            console.error(error);
            // Handle errors and respond with an appropriate error message
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Create a new package and delivery
    async getPackageTypeById(req: Request, res: Response): Promise<void> {
        try {
            const { packageTypeId } = req.params;
            const packageType: PackageType | null = await this.packageService.getPackageTypeById(parseInt(packageTypeId, 10));
            if (packageType) {
                res.status(200).json(packageType);
            } else {
                res.status(404).json({ error: 'Package type not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    async getAllPackageTypes(req: Request, res: Response): Promise<void> {
        try {
            // Extract projectId from request parameters
            const { projectId } = req.params;

            // Assuming your packageService.getAllPackageTypes function now requires projectId
            const packageTypes: PackageType[] = await this.packageService.getAllPackageTypes(projectId);

            // Respond with the retrieved package types
            res.status(200).json(packageTypes);
        } catch (error) {
            console.error(error);
            // Handle errors and respond with an appropriate error message
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getPackageByPackageTypeId(req: Request, res: Response): Promise<void> {
        try {
            const { packageTypeId } = req.params;
            const packages = await this.packageService.getPackageByPackageTypeId(parseInt(packageTypeId, 10));
            res.status(200).json(packages);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // update package type
    async updatePackageType(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.packageTypeId, 10);
            const packageTypeDTO: PackageTypeDTO = req.body;
            const updatedPackageType: PackageType = await this.packageService.updatePackageType(id, packageTypeDTO);
            res.status(200).json(updatedPackageType);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getPackageByPackageItemId(req: Request, res: Response): Promise<void> {
        console.log('Received package item ID:', req.params.packageItemId);
        try {
            const { packageItemId } = req.params;
            const packages = await this.packageService.getPackageByPackageItemId(parseInt(packageItemId, 10));
            console.log('Retrieved packages:', packages);
            res.status(200).json(packages);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deletePackageType(req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.packageTypeId, 10);
            console.log('Received package type ID:', id);

            await this.packageService.deletePackageType(id);
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}
