import {Request, Response} from 'express';
import {Stakeholder} from '@prisma/client';
import {StakeholderService} from '../services/stakeholder.service';
import {StakeholderUpdateDTO} from "../dtos/stakeholder.dto";

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
}

export default StakeholderController;
