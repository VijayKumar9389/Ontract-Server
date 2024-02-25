import { Request, Response } from 'express';
import ProjectService from '../services/project.service';
import { ProjectInputDTO } from '../dtos/project.dto';

class ProjectController {
    private projectService: ProjectService;

    constructor() {
        this.projectService = new ProjectService();
    }

    // Create a new project
    createProject = async (req: Request, res: Response): Promise<void> => {
        try {
            // Input validation - Ensure that the request body contains necessary data.
            const projectInput: ProjectInputDTO = req.body;

            // Validate required fields
            if (!projectInput.name) {
                res.status(400).json({ error: 'Project name is required' });
                return;
            } else if (!projectInput.projectRecords || projectInput.projectRecords.length === 0) {
                res.status(400).json({ error: 'Project records are required' });
                return;
            }

            // Create a new project using the project service
            const result: string = await this.projectService.createProjectService(projectInput);

            // Respond with the created project
            console.log('Project Successfully Created:', result);
            res.status(201).json({ message: result });
        } catch (error) {
            console.error('Error creating Project Record:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getProject = async (req: Request, res: Response): Promise<void> => {
        const projectId = parseInt(req.params.projectId, 10);

        try {
            // Your existing logic for fetching the project with details
            const projectWithDetails = await this.projectService.getProjectWithDetails(projectId);

            if (projectWithDetails) {
                res.json(projectWithDetails);
            } else {
                res.status(404).json({ error: 'Project not found' });
            }
        } catch (error) {
            console.error('Error fetching project with details:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    getAllProjects = async (_req: Request, res: Response): Promise<void> => {
        try {
            // Your existing logic for fetching all projects
            const projects = await this.projectService.getAllProjects();
            res.json(projects);
        } catch (error) {
            console.error('Error fetching all projects:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default ProjectController;
