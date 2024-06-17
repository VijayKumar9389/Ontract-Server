import express, { Request, Response, Router } from 'express';
import { DeliveryController } from '../controllers/delivery.controller';
import validateToken from "../middleware/auth";

const router: Router = express.Router();
const deliveryController: DeliveryController = new DeliveryController();

// Routes for Delivery
router.post('/create/delivery', (req: Request, res: Response) =>
    deliveryController.createDelivery(req, res)
);

// Edit delivery details
router.put('/update/:deliveryId', (req: Request, res: Response) =>
    deliveryController.editDelivery(req, res)
);

// Set Completed delivery by ID
router.put('/complete/:deliveryId', (req: Request, res: Response) =>
    deliveryController.setCompletedDelivery(req, res)
);

// Undo Completed delivery by ID
router.put('/undo/:deliveryId', (req: Request, res: Response) =>
    deliveryController.undoCompletedDelivery(req, res)
);

// Get deliveries by projectId
router.get('/getbyproject/:projectId', (req: Request, res: Response) =>
    deliveryController.getDeliveriesByProjectId(req, res)
);

// Get delivery by deliveryId
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

// get all unique delivery routes for a project
router.get('/routes/:projectId', (req: Request, res: Response) =>
    deliveryController.getDeliveryRoutes(req, res)
);

export default router;