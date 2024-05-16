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
const project_service_1 = __importDefault(require("../services/project.service"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const item_service_1 = require("../services/item.service");
class ProjectController {
    constructor() {
        // Create a new project
        this.createProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Input validation - Ensure that the request body contains necessary data.
                const projectInput = req.body;
                // Validate required fields
                if (!projectInput.name) {
                    res.status(400).json({ error: 'Project name is required' });
                    return;
                }
                else if (!projectInput.projectRecords || projectInput.projectRecords.length === 0) {
                    res.status(400).json({ error: 'Project records are required' });
                    return;
                }
                // Create a new project using the project service
                const result = yield this.projectService.createProjectService(projectInput);
                // Respond with the created project
                console.log('Project Successfully Created:', result);
                res.status(201).json({ message: result });
            }
            catch (error) {
                console.error('Error creating Project Record:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        // Delete a project
        this.deleteProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const projectId = parseInt(req.params.projectId, 10);
            try {
                // Fetch items associated with the project
                const items = yield this.itemService.getItemsByProjectId(projectId);
                // Iterate through items and delete images
                for (const item of items) {
                    if (item.image) {
                        const imagePath = path_1.default.join('uploads', item.image);
                        fs_1.default.unlinkSync(imagePath);
                    }
                }
                // Delete the project
                yield this.projectService.deleteProject(projectId);
                res.json({ message: 'Project deleted successfully' });
            }
            catch (error) {
                console.error('Error deleting project:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        this.editProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const projectId = parseInt(req.params.projectId, 10);
            const projectData = req.body;
            try {
                // Your existing logic for updating the project
                yield this.projectService.editProject(projectId, projectData);
                res.json({ message: 'Project updated successfully' });
            }
            catch (error) {
                console.error('Error updating project:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        this.getProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const projectId = parseInt(req.params.projectId, 10);
            try {
                // Your existing logic for fetching the project with details
                const projectWithDetails = yield this.projectService.getProjectWithDetails(projectId);
                if (projectWithDetails) {
                    res.json(projectWithDetails);
                }
                else {
                    res.status(404).json({ error: 'Project not found' });
                }
            }
            catch (error) {
                console.error('Error fetching project with details:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        this.getAllProjects = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Your existing logic for fetching all projects
                const projects = yield this.projectService.getAllProjects();
                res.json(projects);
            }
            catch (error) {
                console.error('Error fetching all projects:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        this.projectService = new project_service_1.default();
        this.itemService = new item_service_1.ItemService();
    }
}
exports.default = ProjectController;
