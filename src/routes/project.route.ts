import express, { Router } from 'express';
import ProjectController from '../controllers/project.controller';

const router: Router = express.Router();
const projectController: ProjectController = new ProjectController();

// Define routes
router.post('/create', projectController.createProject);
router.delete('/delete/:projectId', projectController.deleteProject)
router.get('/get/:projectId', projectController.getProject);
router.get('/getall', projectController.getAllProjects);
router.put('/edit/:projectId', projectController.editProject);

export default router;
``