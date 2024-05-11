import express, { Request, Response, Router } from 'express';
import { PackageController } from '../controllers/package.controller';

const router: Router = express.Router();
const packageController: PackageController = new PackageController();

// Routes for PackageType
router.post('/create/packagetype/:projectId', (req: Request, res: Response) =>
    packageController.createPackageType(req, res)
);

router.put('/update/packagetype/:packageTypeId', (req: Request, res: Response) =>
    packageController.updatePackageType(req, res)
);

// Delete packageType by id
router.get('/get/packagetype/:projectId', (_req: Request, res: Response) =>
    packageController.getAllPackageTypes(_req, res)
);

router.get('/get/packagebypackagetypeid/:packageTypeId', (req: Request, res: Response) =>
    packageController.getPackageByPackageTypeId(req, res)
);

router.get('/get/packagebypackageitemid/:packageItemId', (req: Request, res: Response) =>
    packageController.getPackageByPackageItemId(req, res)
);

router.get('/get/packagetypebyid/:packageTypeId', (req: Request, res: Response) =>
    packageController.getPackageTypeById(req, res)
);

// Route to create a new package for an existing delivery
router.post('/create/packageforexistingdelivery', (req: Request, res: Response) =>
    packageController.createPackageForExistingDelivery(req, res)
);

router.delete('/cancel/package/:packageId/:stakeholderId', (req: Request, res: Response) =>
    packageController.cancelPackage(req, res)
);

router.put('/change/packagepackagetype/:packageId/:packageTypeId', (req: Request, res: Response) =>
    packageController.changePackagePackageType(req, res)
);

router.delete('/delete/packagetype/:packageTypeId', (req: Request, res: Response) =>
    packageController.deletePackageType(req, res)
);


export default router;
