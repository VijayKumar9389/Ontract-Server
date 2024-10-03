import {Request, Response} from 'express';
import TractRecordService from "../services/tract-record.service";
import {TractFormUpdateDTO} from "../dtos/tract-record.dto";
import {Stakeholder, TractRecord} from "@prisma/client";
import {StakeholderWithTractRecords} from "../dtos/stakeholder.dto";
import {ProjectRecordInputDTO, ProjectRecordOutputDTO} from "../dtos/project.dto";
import { writeFile } from 'fs/promises'; // For writing file (Node.js 14+)
import * as xlsx from 'xlsx'; // Import xlsx librar

class TractRecordController {
    private tractRecordService: TractRecordService;

    constructor() {
        this.tractRecordService = new TractRecordService();
    }

    // Get stakeholders with tract records by tract number
    async getStakeholdersWithTractRecordsByTractNo(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);
        const tractNo: number = parseInt(req.params.tractNo, 10);
        // Validate projectId and tractNo
        try {
            const stakeholders: Stakeholder[] = await this.tractRecordService.getStakeholdersWithTractRecordsByTractNo(
                projectId,
                tractNo
            );
            res.status(200).json(stakeholders);
        } catch (error) {
            console.error('Error in TractRecordController:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Update tract record by ID
    async updateTractRecord(req: Request, res: Response): Promise<void> {
        const tractRecordId: number = parseInt(req.params.id, 10);
        const updatedData: TractFormUpdateDTO = {
            ...req.body,
            occupants: parseInt(req.body.occupants, 10), // Parse occupants to number
        };
        try {
            const updatedTractRecord: TractRecord = await this.tractRecordService.updateTractRecordById(tractRecordId, updatedData);
            console.log('Successfully Updated:', tractRecordId)
            res.status(200).json(updatedTractRecord);
        } catch (error) {
            console.error('Error updating tract record:', error);
            res.status(500).json({error: 'Failed to update tract record'});
        }
    }

    // Get tract records by project ID
    async getTractRecordByProjectId(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);
        try {

            // Fetch stakeholders with tract records asynchronously
            const stakeholders: StakeholderWithTractRecords[] = await this.tractRecordService.getTractRecordsByProjectWithStakeholders(projectId);

            // Unnormalize data to the format expected by ProjectRecordInputDTO
            const unnormalizedData: ProjectRecordInputDTO[] = [];
            for (const stakeholder of stakeholders) {
                for (const tractRecord of stakeholder.tractRecords) {
                    unnormalizedData.push({
                        position: tractRecord.position,
                        tract: tractRecord.tract,
                        pin: tractRecord.pin,
                        structure: tractRecord.structure,
                        interest: tractRecord.interest,
                        isPerson: stakeholder.isPerson,
                        stakeholderComments: stakeholder.stakeholderComments,
                        stakeholderStatus: stakeholder.stakeholderStatus,
                        name: stakeholder.name,
                        streetAddress: stakeholder.streetAddress,
                        mailingAddress: stakeholder.mailingAddress,
                        phoneNumber: stakeholder.phoneNumber,
                        occupants: tractRecord.occupants,
                        worksLand: tractRecord.worksLand,
                        contacted: stakeholder.contacted,
                        attempts: stakeholder.attempts,
                        consultation: stakeholder.consultation,
                        followUp: stakeholder.followUp,
                        tractComments: tractRecord.tractComments,
                        email: stakeholder.email,
                        pageNo: tractRecord.pageNumber,
                        keepDelete: tractRecord.keepdelete,
                        Commodity: tractRecord.commodity,
                        pipelineStatus: tractRecord.pipelineStatus
                    });
                }
            }

            // Sort the unnormalized data by position in ascending order
            unnormalizedData.sort((a, b) => a.position - b.position);

            // Convert the sorted data to ProjectRecordOutputDTOs
            const normalizedData: ProjectRecordOutputDTO[] = unnormalizedData.map(input => ({
                tract: input.tract,
                pin: input.pin,
                structure: input.structure,
                interest: input.interest,
                stakeholderStatus: input.stakeholderStatus,
                name: input.name,
                streetAddress: input.streetAddress,
                mailingAddress: input.mailingAddress,
                phoneNumber: input.phoneNumber,
                occupants: input.occupants,
                worksLand: input.worksLand,
                contacted: input.contacted,
                attempts: input.attempts,
                consultation: input.consultation,
                followUp: input.followUp,
                tractComments: input.tractComments,
                email: input.email,
                pageNo: input.pageNo,
                keepDelete: input.keepDelete,
                Commodity: input.Commodity,
                pipelineStatus: input.pipelineStatus
            }));

            // Generate Excel file
            const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(normalizedData);
            const wb: xlsx.WorkBook = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(wb, ws, 'Tract Records');
            const excelBuffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' });

            // Set response headers to prompt download
            res.setHeader('Content-Disposition', 'attachment; filename=tract_records.xlsx');
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

            // Send the Excel file buffer to the client
            res.status(200).send(excelBuffer);
        } catch (error) {
            console.error('Error fetching and transforming tract records:', error);
            res.status(500).json({ error: 'Failed to fetch and transform tract records' });
        }
    }

}

export default TractRecordController;