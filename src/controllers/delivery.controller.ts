import { Request, Response } from 'express';
import { DeliveryDTO } from '../dtos/delivery.dto';
import DeliveryService from "../services/delivery.service";
import {Delivery} from "@prisma/client";

export class DeliveryController {
    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    async createDelivery(req: Request, res: Response): Promise<void> {
        try {
            const deliveryData: DeliveryDTO = req.body;
            const newDelivery = await this.deliveryService.createDelivery(deliveryData);

            if (newDelivery) {
                res.status(201).json(newDelivery);
            } else {
                res.status(500).json({ error: 'Error creating delivery' });
            }
        } catch (error: any) {
            console.error('Error creating delivery:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getDeliveriesByProjectId(req: Request, res: Response): Promise<void> {
        try {
            const projectId: number = parseInt(req.params.projectId, 10);
            const deliveries : Delivery[] = await this.deliveryService.getDeliveriesByProjectId(projectId);
            res.status(200).json(deliveries);
        } catch (error) {
            console.error('Error in getDeliveriesByProjectId:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getDeliveriesByPackageId(req: Request, res: Response): Promise<void> {
        try {
            const packageId: number = parseInt(req.params.packageId, 10);

            if (isNaN(packageId)) {
                res.status(400).json({ error: 'Invalid packageId' });
                return;
            }

            const deliveriesByPackage: Delivery[] = await this.deliveryService.getDeliveriesByPackageId(packageId);
            res.status(200).json(deliveriesByPackage);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
