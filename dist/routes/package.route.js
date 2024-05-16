"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const package_controller_1 = require("../controllers/package.controller");
const router = express_1.default.Router();
const packageController = new package_controller_1.PackageController();
// Routes for PackageType
router.post('/create/packagetype/:projectId', (req, res) => packageController.createPackageType(req, res));
router.put('/update/packagetype/:packageTypeId', (req, res) => packageController.updatePackageType(req, res));
// Delete packageType by id
router.get('/get/packagetype/:projectId', (_req, res) => packageController.getAllPackageTypes(_req, res));
router.get('/get/packagebypackagetypeid/:packageTypeId', (req, res) => packageController.getPackageByPackageTypeId(req, res));
router.get('/get/packagebypackageitemid/:packageItemId', (req, res) => packageController.getPackageByPackageItemId(req, res));
router.get('/get/packagetypebyid/:packageTypeId', (req, res) => packageController.getPackageTypeById(req, res));
// Route to create a new package for an existing delivery
router.post('/create/packageforexistingdelivery', (req, res) => packageController.createPackageForExistingDelivery(req, res));
router.delete('/cancel/package/:packageId/:stakeholderId', (req, res) => packageController.cancelPackage(req, res));
router.put('/change/packagepackagetype/:packageId/:packageTypeId', (req, res) => packageController.changePackagePackageType(req, res));
router.delete('/delete/packagetype/:packageTypeId', (req, res) => packageController.deletePackageType(req, res));
exports.default = router;
