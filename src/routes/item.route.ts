// item.routes.ts
import express, {Router, Response, Request} from 'express';
import { upload } from '../middleware/upload';
import {ItemController} from "../controllers/item.controller";

const router : Router = express.Router();
const itemController : ItemController = new ItemController();

// Create Item route
router.post('/create',upload.single('image'), (req: Request, res: Response) =>
    itemController.createItem(req, res)
);

// Get All Items
router.get('/getall', (req: Request, res: Response) =>
    itemController.getAllItems(req, res)
);

export default router;
