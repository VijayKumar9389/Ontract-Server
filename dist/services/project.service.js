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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const mapFunctions_1 = require("../utils/mapFunctions");
class ProjectService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    // Create a new project with stakeholders and tract records
    createProjectService(project) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if project records exist
                if (project.projectRecords && project.projectRecords.length > 0) {
                    // Create the project and retrieve its ID
                    const createdProject = yield this.createProject(project);
                    // Create stakeholders and tract records using the project ID
                    yield this.createStakeholdersAndTractRecords(createdProject.id, project.projectRecords);
                    return 'Project Record created successfully';
                }
                else {
                    return 'No Project Record received';
                }
            }
            catch (error) {
                console.error('Error creating Project Record:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.project.findMany();
            }
            catch (error) {
                console.error('Error fetching all projects:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    editProject(projectId, project) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.project.update({
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
            }
            catch (error) {
                console.error('Error updating project:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    deleteProject(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.project.delete({
                    where: {
                        id: projectId,
                    },
                });
            }
            catch (error) {
                console.error('Error deleting project:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    // Get all projects
    getProjectWithDetails(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch project with details
                return yield this.prisma.project.findUnique({
                    where: { id: projectId },
                    include: {
                        stakeholders: {
                            include: {
                                tractRecords: true,
                            },
                        },
                    },
                });
            }
            catch (error) {
                console.error('Error fetching project with details:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    getProjectWithDeliveryDetails(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch project with details
                return yield this.prisma.project.findUnique({
                    where: { id: projectId },
                    include: {
                        stakeholders: {
                            include: {
                                tractRecords: true,
                            },
                        },
                    },
                });
            }
            catch (error) {
                console.error('Error fetching project with details:', error);
                throw new Error('Internal Server Error');
            }
        });
    }
    // Create a new project with prisma
    createProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create the project
                return yield this.prisma.project.create({
                    data: {
                        name: project.name,
                        year: project.year,
                        notes: project.notes,
                        surveyLink: project.surveyLink,
                    },
                });
            }
            catch (error) {
                console.error('Error creating project:', error);
                throw new Error('Failed to create project');
            }
        });
    }
    // Create stakeholders and tract records
    createStakeholdersAndTractRecords(projectId, projectRecords) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create a map of stakeholders to tract records
                const stakeholdersMap = this.createStakeholdersMap(projectRecords);
                // Create unique stakeholders and tract records
                yield this.createUniqueStakeholders(projectId, stakeholdersMap);
            }
            catch (error) {
                console.error('Error creating stakeholders and tract records:', error);
                throw new Error('Failed to create stakeholders and tract records');
            }
        });
    }
    // Create a map of stakeholders to tract records
    createStakeholdersMap(projectRecords) {
        const stakeholdersMap = new Map();
        // Iterate through project records
        for (const projectRecord of projectRecords) {
            const tractRecordInput = (0, mapFunctions_1.mapProjectRecordToTractRecordInput)(projectRecord);
            // Check if stakeholder already exists in the map
            if (stakeholdersMap.has(projectRecord.name)) {
                // Add tract record to existing stakeholder
                const existingStakeholder = stakeholdersMap.get(projectRecord.name);
                existingStakeholder.tractRecords.push(tractRecordInput);
            }
            else {
                // Create new stakeholder and add tract record
                const newStakeholder = (0, mapFunctions_1.mapProjectRecordToStakeholderInput)(projectRecord, [tractRecordInput]);
                stakeholdersMap.set(projectRecord.name, newStakeholder);
            }
        }
        return stakeholdersMap;
    }
    // Create unique stakeholders and tract records
    createUniqueStakeholders(projectId, stakeholdersMap) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniqueStakeholders = Array.from(stakeholdersMap.values());
            // Create unique stakeholders and tract records
            for (const stakeholder of uniqueStakeholders) {
                // Create stakeholder with tract records
                yield this.createStakeholderWithTractRecords(projectId, stakeholder);
            }
        });
    }
    // Create stakeholder with tract records
    createStakeholderWithTractRecords(projectId, stakeholder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create stakeholder with tract records
                const createdStakeholder = yield this.prisma.stakeholder.create({
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
                const tractRecords = stakeholder.tractRecords.map((tractRecord) => (Object.assign(Object.assign({}, tractRecord), { stakeholderId: createdStakeholder.id })));
                // Create tract records
                yield this.prisma.tractRecord.createMany({
                    data: tractRecords,
                });
            }
            catch (error) {
                console.error('Error creating stakeholder with tract records:', error);
                throw new Error('Failed to create stakeholder with tract records');
            }
        });
    }
}
exports.default = ProjectService;
