"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stakeholder_controller_1 = __importDefault(require("../controllers/stakeholder.controller"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
const stakeholderController = new stakeholder_controller_1.default();
// Update a stakeholder information
router.post('/update/:id', (req, res) => stakeholderController.updateStakeholder(req, res));
// Fetch all unique street addresses for stakeholders by projectId
router.get('/getAllUniqueStreetAddresses/:projectId', (req, res) => stakeholderController.getAllUniqueStreetAddresses(req, res));
router.get('/getRelatedStakeholders/:stakeholderId', (req, res) => stakeholderController.getRelatedStakeholders(req, res));
router.get('/getStakeholdersById/:stakeholderId', (req, res) => stakeholderController.getStakeholdersById(req, res));
// Fetch all stakeholders by project ID including tractRecords
router.get('/getStakeholdersContactSummaryByProjectId/:projectId', (req, res) => stakeholderController.getStakeholdersContactSummaryByProjectId(req, res));
router.get('/getLocations/:projectId', (req, res) => stakeholderController.getAllLocations(req, res));
router.get('/getStakeholdersByProjectId/:projectId', (0, auth_1.default)(false), (req, res) => stakeholderController.getStakeholdersByProjectId(req, res));
exports.default = router;
