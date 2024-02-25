import { Request, Response } from 'express';
import TractRecordService from "../services/tract-record.service";
import {TractFormUpdateDTO} from "../dtos/tract-record.dto";

 class TractRecordController {
    private tractRecordService: TractRecordService;

    constructor() {
        this.tractRecordService = new TractRecordService();
    }

    async getStakeholdersWithTractRecordsByTractNo(req: Request, res: Response): Promise<void> {
        const projectId: number = parseInt(req.params.projectId, 10);
        const tractNo: number = parseInt(req.params.tractNo, 10);

        // Validate projectId and tractNo
        try {
            const stakeholders = await this.tractRecordService.getStakeholdersWithTractRecordsByTractNo(
                projectId,
                tractNo
            );
            res.status(200).json(stakeholders);
        } catch (error) {
            console.error('Error in TractRecordController:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateTractRecord(req: Request, res: Response): Promise<void> {
        const tractRecordId: number = parseInt(req.params.id, 10);
        const updatedData = req.body;
        console.log('tractRecordId:', tractRecordId);

        try {
            const updatedTractRecord: TractFormUpdateDTO = await this.tractRecordService.updateTractRecordById(tractRecordId, updatedData);
            console.log('updatedTractRecord:', updatedTractRecord)
            res.status(200).json(updatedTractRecord);
        } catch (error) {
            console.error('Error updating tract record:', error);
            res.status(500).json({error: 'Failed to update tract record'});
        }
    }
}

export default TractRecordController;