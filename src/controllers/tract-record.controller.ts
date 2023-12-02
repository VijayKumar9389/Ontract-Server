import { Request, Response } from 'express';
import { TractRecordService } from '../services/tract-record.service';

export class TractRecordController {
    private tractRecordService: TractRecordService;

    constructor() {
        this.tractRecordService = new TractRecordService();
    }

    async getStakeholdersByProjectIdAndTractRecord(req: Request, res: Response): Promise<void> {
        const projectId = parseInt(req.params.projectId, 10);
        const tractNo = parseInt(req.params.tractNo, 10);

        try {
            const stakeholders = await this.tractRecordService.getStakeholdersByProjectIdAndTractRecord(
                projectId,
                tractNo
            );

            res.status(200).json(stakeholders);
        } catch (error) {
            console.error('Error in TractRecordController:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
