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


// // Get deliveries by stakeholderId
// router.get('/deliveries', async (_req: Request, res: Response) :Promise<void> => {
//     try {
//         const deliveries : Delivery[] = await getDeliveries();
//         res.status(200).json(deliveries);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
//
//
//
// // New route to get deliveries by stakeholderId
// router.get('/deliveries/:stakeholderId', async (req: Request, res: Response) :Promise<void> => {
//     try {
//         const stakeholderId: number = parseInt(req.params.stakeholderId, 10);
//
//         if (isNaN(stakeholderId)) {
//             res.status(400).json({ error: 'Invalid stakeholderId' });
//             return;
//         }
//
//         const deliveriesByStakeholder : Delivery[] = await getDeliveriesByStakeholder(stakeholderId);
//         res.status(200).json(deliveriesByStakeholder);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


//
// router.delete('/packageTypes/:id', async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         await deletePackageType(parseInt(id, 10));
//         res.status(204).send();
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });