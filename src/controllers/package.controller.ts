// PackageTypeController.ts
import { Request, Response } from 'express';
import PackageService from "../services/package.service"; // Adjust the path based on your actual structure
import { PackageTypeDTO } from '../dtos/delivery.dto';

export class PackageController {
    private packageService: PackageService;

    constructor() {
        this.packageService = new PackageService();
    }

    async createPackageType(req: Request, res: Response): Promise<void> {
        try {
            const packageTypeDTO: PackageTypeDTO = req.body;
            const createdPackageType = await this.packageService.createPackageType(packageTypeDTO);
            res.status(201).json(createdPackageType);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllPackageTypes(_req: Request, res: Response): Promise<void> {
        try {
            const packageTypes = await this.packageService.getAllPackageTypes();
            res.status(200).json(packageTypes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deletePackageType(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.packageService.deletePackageType(parseInt(id, 10));
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
