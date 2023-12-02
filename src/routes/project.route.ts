import express, { Router } from 'express';
import ProjectController from '../controllers/project.controller';

const router: Router = express.Router();
const projectController: ProjectController = new ProjectController();

// Define routes
router.post('/create', projectController.createProject);
router.get('/get/:projectId', projectController.getProject);

export default router;
