// item.routes.ts
import express, {Router, Response, Request} from 'express';
import { upload } from '../middleware/upload';
import {ItemController} from "../controllers/item.controller";

const router : Router = express.Router();
const itemController : ItemController = new ItemController();

// Create Item route
router.post('/create', upload.single('image'), (req: Request, res: Response) =>
    itemController.createItem(req, res)
);

router.put('/update/:itemId', upload.single('image'), (req: Request, res: Response) =>
    itemController.updateItem(req, res)
);

router.delete('/delete/:itemId', (req: Request, res: Response) =>
    itemController.deleteItem(req, res)
);

// Get All Items
router.get('/getall/:projectId', (req: Request, res: Response) =>
    itemController.getAllItems(req, res)
);


// Get Item by Id route
router.get('/get/:itemId', (req: Request, res: Response) =>
    itemController.getItemWithPackageItems(req, res)
);

router.get('/getAll/packageItems/:projectId', (req: Request, res: Response) =>
    itemController.getPackageItemsByProjectId(req, res)
);

router.post('/createpackageitem', (req: Request, res: Response) =>
    itemController.createPackageItem(req, res)
);

// Get items by packageTypeId route
router.get('/get-by-package-type/:packageTypeId', (req: Request, res: Response) =>
    itemController.getItemsByPackageTypeId(req, res)
);


router.delete('/packageItem/delete/:id', (req: Request, res: Response) =>
    itemController.deletePackageItem(req, res)
);


export default router;
