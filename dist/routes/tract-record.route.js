"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const tract_record_controller_1 = __importDefault(require("../controllers/tract-record.controller"));
const router = express_1.default.Router();
const tractRecordController = new tract_record_controller_1.default();
// Define the route
router.get('/get/:projectId/:tractNo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tractRecordController.getStakeholdersWithTractRecordsByTractNo(req, res);
}));
// Define the route to update a tract record by ID
router.put('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tractRecordController.updateTractRecord(req, res);
}));
// Define the route to get tract records by project ID
router.get('/get/:projectId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield tractRecordController.getTractRecordByProjectId(req, res);
}));
exports.default = router;
