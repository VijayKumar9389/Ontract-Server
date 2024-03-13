import express, { Request, Response, Router } from 'express';
import { DeliveryController } from '../controllers/delivery.controller';

const router: Router = express.Router();
const deliveryController: DeliveryController = new DeliveryController();

// Routes for Delivery
router.post('/create/delivery', (req: Request, res: Response) =>
    deliveryController.createDelivery(req, res)
);

// Get deliveries by projectId
router.get('/getbyproject/:projectId', (req: Request, res: Response) =>
    deliveryController.getDeliveriesByProjectId(req, res)
);

router.get('/getbyid/:deliveryId', (req: Request, res: Response) =>
    deliveryController.getDeliveryById(req, res)
);

// Get deliveries by stakeholderId
router.get('/getbypackage/:packageId', (req: Request, res: Response) =>
    deliveryController.getDeliveriesByPackageId(req, res)
);

router.get('/report/:projectId', (req: Request, res: Response) =>
    deliveryController.getDeliveriesReport(req, res)
);

router.delete('/cancel/:deliveryId', (req: Request, res: Response) =>
    deliveryController.cancelDelivery(req, res)
);

export default router;