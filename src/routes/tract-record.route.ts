// routes.ts
import express, {Router} from 'express';
import TractRecordController from '../controllers/tract-record.controller';

const router: Router = express.Router();
const tractRecordController: TractRecordController = new TractRecordController();

// Define the route
router.get('/get/:projectId/:tractNo', async (req, res) => {
    await tractRecordController.getStakeholdersWithTractRecordsByTractNo(req, res);
});

// Define the route to update a tract record by ID
router.put('/update/:id', async (req, res) => {
    await tractRecordController.updateTractRecord(req, res);
});

// Define the route to get tract records by project ID
router.get('/get/:projectId', async (req, res) => {
    await tractRecordController.getTractRecordByProjectId(req, res);
});

export default router;
