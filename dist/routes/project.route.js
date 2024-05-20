"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project_controller_1 = __importDefault(require("../controllers/project.controller"));
const router = express_1.default.Router();
const projectController = new project_controller_1.default();
// Define routes
router.post('/create', projectController.createProject);
router.delete('/delete/:projectId', projectController.deleteProject);
router.get('/get/:projectId', projectController.getProject);
router.get('/getall', projectController.getAllProjects);
router.put('/edit/:projectId', projectController.editProject);
exports.default = router;
