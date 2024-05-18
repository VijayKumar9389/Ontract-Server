"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// item.routes.ts
const express_1 = __importDefault(require("express"));
const upload_1 = require("../middleware/upload");
const item_controller_1 = require("../controllers/item.controller");
const router = express_1.default.Router();
const itemController = new item_controller_1.ItemController();
// Create Item route
router.post('/create', upload_1.upload.single('image'), (req, res) => itemController.createItem(req, res));
router.put('/update/:itemId', upload_1.upload.single('image'), (req, res) => itemController.updateItem(req, res));
router.delete('/delete/:itemId', (req, res) => itemController.deleteItem(req, res));
// Get All Items
router.get('/getall/:projectId', (req, res) => itemController.getAllItems(req, res));
// Get Item by Id route
router.get('/get/:itemId', (req, res) => itemController.getItemWithPackageItems(req, res));
router.get('/getAll/packageItems/:projectId', (req, res) => itemController.getPackageItemsByProjectId(req, res));
router.post('/createpackageitem', (req, res) => itemController.createPackageItem(req, res));
// Get items by packageTypeId route
router.get('/get-by-package-type/:packageTypeId', (req, res) => itemController.getItemsByPackageTypeId(req, res));
router.delete('/packageItem/delete/:id', (req, res) => itemController.deletePackageItem(req, res));
router.put('/packageItem/update/:id', (req, res) => itemController.updatePackageItemQuantity(req, res));
exports.default = router;
