// routes.ts
import express, {Router} from 'express';
import { TractRecordController } from '../controllers/tract-record.controller';

const router: Router = express.Router();
const tractRecordController: TractRecordController = new TractRecordController();

// Define the route
router.get('/get/:projectId/:tractRecord', tractRecordController.getStakeholdersByProjectIdAndTractRecord);

export default router;
