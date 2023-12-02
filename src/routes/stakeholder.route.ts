import express, {Router, Request, Response} from "express";
import StakeholderController from "../controllers/stakeholder.controller";

const router : Router = express.Router();
const stakeholderController : StakeholderController = new StakeholderController();

// update stakeholder
router.post('/update/:id', (req: Request, res: Response) =>
    stakeholderController.updateStakeholder(req, res)
);

export default router;