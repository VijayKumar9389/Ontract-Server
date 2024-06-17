"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delivery_controller_1 = require("../controllers/delivery.controller");
const router = express_1.default.Router();
const deliveryController = new delivery_controller_1.DeliveryController();
// Routes for Delivery
router.post('/create/delivery', (req, res) => deliveryController.createDelivery(req, res));
// Edit delivery details
router.put('/update/:deliveryId', (req, res) => deliveryController.editDelivery(req, res));
// Set Completed delivery by ID
router.put('/complete/:deliveryId', (req, res) => deliveryController.setCompletedDelivery(req, res));
// Undo Completed delivery by ID
router.put('/undo/:deliveryId', (req, res) => deliveryController.undoCompletedDelivery(req, res));
// Get deliveries by projectId
router.get('/getbyproject/:projectId', (req, res) => deliveryController.getDeliveriesByProjectId(req, res));
// Get delivery by deliveryId
router.get('/getbyid/:deliveryId', (req, res) => deliveryController.getDeliveryById(req, res));
// Get deliveries by stakeholderId
router.get('/getbypackage/:packageId', (req, res) => deliveryController.getDeliveriesByPackageId(req, res));
router.get('/report/:projectId', (req, res) => deliveryController.getDeliveriesReport(req, res));
router.delete('/cancel/:deliveryId', (req, res) => deliveryController.cancelDelivery(req, res));
// get all unique delivery routes for a project
router.get('/routes/:projectId', (req, res) => deliveryController.getDeliveryRoutes(req, res));
exports.default = router;
