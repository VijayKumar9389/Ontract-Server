import {Request, Response} from 'express';
import {Stakeholder} from '@prisma/client';
import {StakeholderService} from '../services/stakeholder.service';
import {StakeholderSummaryDto, StakeholderUpdateDTO, StakeholderWithTractRecords} from "../dtos/stakeholder.dto";

class StakeholderController {
    private stakeholderService: StakeholderService;

    constructor() {
        this.stakeholderService = new StakeholderService();
    }

    // Update a stakeholder information
    async updateStakeholder(req: Request, res: Response): Promise<void> {
        const stakeholderId: number = parseInt(req.params.id, 10);
        const updatedData: StakeholderUpdateDTO = req.body;
        // Validate stakeholderId
        try {
            // Update stakeholder
            const updatedStakeholder: Stakeholder | null = await this.stakeholderService.updateStakeholderById(stakeholderId, updatedData);
            res.status(200).json(updatedStakeholder);
        } catch (error) {
            console.error('Error updating stakeholder:', error);
            res.status(500).json({error: 'Failed to update stakeholder'});
        }
    }

    async getAllUniqueStreetAddresses(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);
        try {
            const uniqueAddresses = await this.stakeholderService.getAllUniqueStreetAddresses(projectId);
            res.status(200).json(uniqueAddresses);
        } catch (error) {
            console.error("Error fetching unique street addresses:", error);
            res.status(500).send("Failed to fetch unique street addresses");
        }
    }

    async getStakeholdersByProjectId(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);
        try {
            const stakeholders: StakeholderWithTractRecords[] = await this.stakeholderService.getStakeholdersByProjectId(projectId);
            res.status(200).json(stakeholders);
        } catch (error) {
            console.error('Error fetching stakeholders:', error);
            res.status(500).json({error: 'Failed to fetch stakeholders'});
        }
    }

    async getStakeholdersById(req: Request, res: Response): Promise<void> {
        const stakeholderId: number = parseInt(req.params.stakeholderId, 10);
        try {
            const stakeholder: StakeholderWithTractRecords | null = await this.stakeholderService.getStakeholderById(stakeholderId);
            res.status(200).json(stakeholder);
        } catch (error) {
            console.error('Error fetching stakeholder:', error);
            res.status(500).json({error: 'Failed to fetch stakeholder'});
        }
    }

    // Fetch all stakeholders by project ID including tractRecords
    async getStakeholdersContactSummaryByProjectId(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);

        try {
            const stakeholders: StakeholderWithTractRecords[] = await this.stakeholderService.getStakeholdersByProjectId(projectId);

            // Total count of stakeholders
            const totalCount: number = stakeholders.length;

            // Count of stakeholders with one tractRecord
            const oneTractCount: number = stakeholders.filter(stakeholder => stakeholder.tractRecords.length === 1).length;

            // Count of stakeholders with more than one tractRecord
            const moreThanOneTractCount: number = stakeholders.filter(stakeholder => stakeholder.tractRecords.length > 1).length;

            // Count of stakeholders with contacted equal to 'YES'
            const contactedYesCount: number = stakeholders.filter(stakeholder => stakeholder.contacted === 'YES').length;

            // Count of stakeholders with contacted equal to 'NO'
            const contactedNoCount: number = stakeholders.filter(stakeholder => stakeholder.contacted === 'NO').length;

            // Count of stakeholders with attempted contact
            const attemptedContactCount: number = stakeholders.filter(stakeholder => stakeholder.attempts !== '').length;

            // Count of stakeholders with no attempted contact
            const notAttemptedContactCount: number = stakeholders.filter(stakeholder => stakeholder.attempts === '').length;

            // Count of stakeholders with missing phone numbers
            const missingPhoneNumbers: number = stakeholders.filter(stakeholder => stakeholder.phoneNumber === '').length;

            const consultedCount: number = stakeholders.filter(stakeholder => stakeholder.consultation !== '').length;

            const notConsultedCount: number = stakeholders.filter(stakeholder => stakeholder.consultation === '').length;

            const deliveryPlannedCount: number = stakeholders.filter(stakeholder => stakeholder.packageId !== null).length;

            const deliveryNotPlannedCount: number = stakeholders.filter(stakeholder => stakeholder.packageId === null).length;

            // Create a summary object
            const summary: StakeholderSummaryDto = {
                totalCount,
                oneTractCount,
                moreThanOneTractCount,
                attemptedContactCount,
                notAttemptedContactCount,
                consultedCount,
                notConsultedCount,
                deliveryPlannedCount,
                deliveryNotPlannedCount,
                missingPhoneNumbers,
                contactedYesCount,
                contactedNoCount,
            };

            res.status(200).json(summary);
        } catch (error) {
            console.error('Error fetching stakeholders:', error);
            res.status(500).json({error: 'Failed to fetch stakeholders'});
        }
    }
}

export default StakeholderController;
