import express, { Request, Response, Router } from 'express';
import { PackageController } from '../controllers/package.controller';

const router: Router = express.Router();
const packageController: PackageController = new PackageController();

// Routes for PackageType
router.post('/create/packagetype', (req: Request, res: Response) =>
    packageController.createPackageType(req, res)
);

// Delete packageType by id
router.get('/get/packagetype', (_req: Request, res: Response) =>
    packageController.getAllPackageTypes(_req, res)
);

export default router;
