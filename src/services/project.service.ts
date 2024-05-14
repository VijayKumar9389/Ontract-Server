import { PrismaClient, Project, Stakeholder } from '../../prisma-client';
import {
    ProjectInputDTO,
    StakeholderInputDTO,
    TractRecordInputDTO,
    ProjectRecordInputDTO,
} from '../dtos/project.dto';
import { mapProjectRecordToStakeholderInput, mapProjectRecordToTractRecordInput } from '../utils/mapFunctions';
import {EditProjectInputDTO} from "../dtos/project.dto";

class ProjectService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // Create a new project with stakeholders and tract records
    async createProjectService(project: ProjectInputDTO): Promise<string> {
        try {
            // Check if project records exist
            if (project.projectRecords && project.projectRecords.length > 0) {
                // Create the project and retrieve its ID
                const createdProject: Project = await this.createProject(project);
                // Create stakeholders and tract records using the project ID
                await this.createStakeholdersAndTractRecords(createdProject.id, project.projectRecords);

                return 'Project Record created successfully';
            } else {
                return 'No Project Record received';
            }
        } catch (error) {
            console.error('Error creating Project Record:', error);
            throw new Error('Internal Server Error');
        }
    }

    async getAllProjects(): Promise<Project[]> {
        try {
            return await this.prisma.project.findMany();
        } catch (error) {
            console.error('Error fetching all projects:', error);
            throw new Error('Internal Server Error');
        }
    }

    async editProject(projectId: number, project: EditProjectInputDTO): Promise<void> {
        try {
            await this.prisma.project.update({
                where: {
                    id: projectId,
                },
                data: {
                    name: project.name,
                    year: project.year,
                    notes: project.notes,
                    surveyLink: project.surveyLink,
                },
            });
        } catch (error) {
            console.error('Error updating project:', error);
            throw new Error('Internal Server Error');
        }
    }


    async deleteProject(projectId: number): Promise<void> {
        try {
            await this.prisma.project.delete({
                where: {
                    id: projectId,
                },
            });
        } catch (error) {
            console.error('Error deleting project:', error);
            throw new Error('Internal Server Error');
        }
    }

    // Get all projects
    async getProjectWithDetails(projectId: number): Promise<Project | null> {
        try {
            // Fetch project with details
            return await this.prisma.project.findUnique({
                where: { id: projectId },
                include: {
                    stakeholders: {
                        include: {
                            tractRecords: true,
                        },
                    },
                },
            });
        } catch (error) {
            console.error('Error fetching project with details:', error);
            throw new Error('Internal Server Error');
        }
    }

    async getProjectWithDeliveryDetails(projectId: number): Promise<Project | null> {
        try {
            // Fetch project with details
            return await this.prisma.project.findUnique({
                where: { id: projectId },
                include: {
                    stakeholders: {
                        include: {
                            tractRecords: true,
                        },
                    },
                },
            });
        } catch (error) {
            console.error('Error fetching project with details:', error);
            throw new Error('Internal Server Error');
        }
    }

    // Create a new project with prisma
    private async createProject(project: ProjectInputDTO): Promise<Project> {
        try {
            // Create the project
            return await this.prisma.project.create({
                data: {
                    name: project.name,
                    year: project.year,
                    notes: project.notes,
                    surveyLink: project.surveyLink,
                },
            });
        } catch (error) {
            console.error('Error creating project:', error);
            throw new Error('Failed to create project');
        }
    }

    // Create stakeholders and tract records
    private async createStakeholdersAndTractRecords(projectId: number, projectRecords: ProjectRecordInputDTO[]): Promise<void> {
        try {
            // Create a map of stakeholders to tract records
            const stakeholdersMap: Map<string, StakeholderInputDTO> = this.createStakeholdersMap(projectRecords);
            // Create unique stakeholders and tract records
            await this.createUniqueStakeholders(projectId, stakeholdersMap);
        } catch (error) {
            console.error('Error creating stakeholders and tract records:', error);
            throw new Error('Failed to create stakeholders and tract records');
        }
    }

    // Create a map of stakeholders to tract records
    private createStakeholdersMap(projectRecords: ProjectRecordInputDTO[]): Map<string, StakeholderInputDTO> {
        const stakeholdersMap: Map<string, StakeholderInputDTO> = new Map();
        // Iterate through project records
        for (const projectRecord of projectRecords) {
            const tractRecordInput: TractRecordInputDTO = mapProjectRecordToTractRecordInput(projectRecord);
            // Check if stakeholder already exists in the map
            if (stakeholdersMap.has(projectRecord.name)) {
                // Add tract record to existing stakeholder
                const existingStakeholder: StakeholderInputDTO = stakeholdersMap.get(projectRecord.name)!;
                existingStakeholder.tractRecords.push(tractRecordInput);
            } else {
                // Create new stakeholder and add tract record
                const newStakeholder: StakeholderInputDTO = mapProjectRecordToStakeholderInput(projectRecord, [tractRecordInput]);
                stakeholdersMap.set(projectRecord.name, newStakeholder);
            }
        }
        return stakeholdersMap;
    }

    // Create unique stakeholders and tract records
    private async createUniqueStakeholders(projectId: number, stakeholdersMap: Map<string, StakeholderInputDTO>): Promise<void> {
        const uniqueStakeholders: StakeholderInputDTO[] = Array.from(stakeholdersMap.values());

        // Create unique stakeholders and tract records
        for (const stakeholder of uniqueStakeholders) {
            // Create stakeholder with tract records
            await this.createStakeholderWithTractRecords(projectId, stakeholder);
        }
    }

    // Create stakeholder with tract records
    private async createStakeholderWithTractRecords(projectId: number, stakeholder: StakeholderInputDTO): Promise<void> {
        try {
            // Create stakeholder with tract records
            const createdStakeholder: Stakeholder = await this.prisma.stakeholder.create({
                data: {
                    name: stakeholder.name,
                    streetAddress: stakeholder.streetAddress,
                    mailingAddress: stakeholder.mailingAddress,
                    phoneNumber: stakeholder.phoneNumber,
                    isPerson: stakeholder.isPerson,
                    stakeholderComments: stakeholder.stakeholderComments,
                    stakeholderStatus: stakeholder.stakeholderStatus,
                    contacted: stakeholder.contacted,
                    consultation: stakeholder.consultation,
                    attempts: stakeholder.attempts,
                    email: stakeholder.email,
                    followUp: stakeholder.followUp,
                    projectId,
                },
            });

            // Create tract records
            const tractRecords = stakeholder.tractRecords.map((tractRecord: TractRecordInputDTO) => ({
                ...tractRecord,
                stakeholderId: createdStakeholder.id,
            }));

            // Create tract records
            await this.prisma.tractRecord.createMany({
                data: tractRecords,
            });

        } catch (error) {
            console.error('Error creating stakeholder with tract records:', error);
            throw new Error('Failed to create stakeholder with tract records');
        }
    }

}

export default ProjectService;
