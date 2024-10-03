import { Request, Response } from 'express';
import ProjectService from '../services/project.service';
import {EditProjectInputDTO, ProjectInputDTO} from '../dtos/project.dto';
import fs from "fs";
import path from 'path';
import {Item} from "@prisma/client";
import {ItemService} from "../services/item.service";
import {DeleteObjectCommand} from "@aws-sdk/client-s3";
import {bucketName, s3} from "../middleware/s3";

class ProjectController {
    private projectService: ProjectService;
    private itemService: ItemService;

    constructor() {
        this.projectService = new ProjectService();
        this.itemService = new ItemService();
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

    // Delete a project
    deleteProject = async (req: Request, res: Response): Promise<void> => {
        const projectId: number = parseInt(req.params.projectId, 10);

        try {
            // Fetch items associated with the project
            const items: Item[] = await this.itemService.getItemsByProjectId(projectId);

            // Determine the environment
            const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

            // Iterate through items and delete images from S3
            for (const item of items) {
                if (item.image) {
                    const deleteKey = `${environment}/${item.image}`;
                    const deleteParams = {
                        Bucket: bucketName, // Replace with your actual bucket name
                        Key: deleteKey,
                    };
                    await s3.send(new DeleteObjectCommand(deleteParams));
                }
            }

            // Delete the project
            await this.projectService.deleteProject(projectId);

            res.json({ message: 'Project deleted successfully' });
        } catch (error) {
            console.error('Error deleting project:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    // Edit a project
    editProject = async (req: Request, res: Response): Promise<void> => {
        const projectId: number = parseInt(req.params.projectId, 10);
        const projectData: EditProjectInputDTO = req.body;

        try {
            // Your existing logic for updating the project
            await this.projectService.editProject(projectId, projectData);
            res.json({ message: 'Project updated successfully' });
        } catch (error) {
            console.error('Error updating project:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };

    // Get a project
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

    // Get all projects
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
