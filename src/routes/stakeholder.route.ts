import express, {Router, Request, Response} from "express";
import StakeholderController from "../controllers/stakeholder.controller";
import validateToken from "../middleware/auth";

const router : Router = express.Router();
const stakeholderController: StakeholderController = new StakeholderController();

// Update a stakeholder information
router.post('/update/:id', (req: Request, res: Response) =>
    stakeholderController.updateStakeholder(req, res)
);

// Fetch all unique street addresses for stakeholders by projectId
router.get('/getAllUniqueStreetAddresses/:projectId',  (req: Request, res: Response) =>
    stakeholderController.getAllUniqueStreetAddresses(req, res)
);

router.get('/getRelatedStakeholders/:stakeholderId',  (req: Request, res: Response) =>
    stakeholderController.getRelatedStakeholders(req, res)
);

router.get('/getStakeholdersById/:stakeholderId',  (req: Request, res: Response) =>
    stakeholderController.getStakeholdersById(req, res)
);

// Fetch all stakeholders by project ID including tractRecords
router.get('/getStakeholdersContactSummaryByProjectId/:projectId', (req: Request, res: Response) =>
    stakeholderController.getStakeholdersContactSummaryByProjectId(req, res)
);

router.get('/getStakeholdersByProjectId/:projectId', validateToken(false), (req: Request, res: Response) =>
    stakeholderController.getStakeholdersByProjectId(req, res)
);

export default router;