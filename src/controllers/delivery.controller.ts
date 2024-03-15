import {Request, Response} from 'express';
import {CreateDeliveryDTO, DeliveryWithNestedObjects, EditDeliveryDTO} from '../dtos/delivery.dto';
import DeliveryService from "../services/delivery.service";
import {Delivery} from "@prisma/client";

export class DeliveryController {
    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    // Create a new delivery
    async createDelivery(req: Request, res: Response): Promise<void> {
        try {
            // Input validation - Ensure that the request body contains necessary data.
            const deliveryData: CreateDeliveryDTO = req.body;
            const newDelivery = await this.deliveryService.createDelivery(deliveryData);
            //const newDelivery: Delivery | null = await this.deliveryService.createDelivery(deliveryData);
            if (newDelivery) {
                res.status(201).json(newDelivery);
            } else {
                res.status(500).json({error: 'Error creating delivery'});
            }
        } catch (error: any) {
            console.error('Error creating delivery:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Edit delivery details
    async editDelivery(req: Request, res: Response): Promise<void> {
        try {
            const deliveryId: number = parseInt(req.params.deliveryId, 10);
            const deliveryData: EditDeliveryDTO = req.body;
            const updatedDelivery: Delivery | null = await this.deliveryService.editDelivery(deliveryId, deliveryData);
            if (updatedDelivery) {
                res.status(200).json(updatedDelivery);
            } else {
                res.status(404).json({error: 'Delivery not found'});
            }
        } catch (error: any) {
            console.error('Error editing delivery:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Get Delivery by ID
    async getDeliveryById(req: Request, res: Response): Promise<void> {
        try {
            const deliveryId: number = parseInt(req.params.deliveryId, 10);
            const delivery: Delivery | null = await this.deliveryService.getDeliveryById(deliveryId);
            if (delivery) {
                res.status(200).json(delivery);
            } else {
                res.status(404).json({error: 'Delivery not found'});
            }
        } catch (error) {
            console.error('Error in getDeliveryById:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Cansel delivery by ID
    async cancelDelivery(req: Request, res: Response): Promise<void> {
        try {
            const deliveryId: number = parseInt(req.params.deliveryId, 10);
            await this.deliveryService.cancelDelivery(deliveryId);
            res.status(204).json();
        } catch (error) {
            console.error('Error in cancelDelivery:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Set Completed delivery by ID
    async setCompletedDelivery(req: Request, res: Response): Promise<void> {
        try {
            const deliveryId: number = parseInt(req.params.deliveryId, 10);
            const completedDate: string = req.body.date;
            await this.deliveryService.setCompletedDelivery(deliveryId, completedDate);
            res.status(204).json();
        } catch (error) {
            console.error('Error in setCompletedDelivery:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }



    // Get deliveries report
    async getDeliveriesReport(req: Request, res: Response): Promise<void> {
        try {
            // Get all deliveries for a project
            const deliveriesReport: DeliveryWithNestedObjects[] = await this.deliveryService.getDeliveriesByProjectId(1);

            // Count of deliveries in report
            const count: number = deliveriesReport.length;

            // Count of stakeholders
            const stakeholderCount = deliveriesReport.reduce((acc, delivery) => {
                return acc + (delivery.packages ? delivery.packages.length : 0);
            }, 0);

            // Count of each package type
            const packageTypeCountMap: Record<string, number> = {};

            // Loop through each delivery and count the package types
            deliveriesReport.forEach((delivery) => {
                if (delivery.packages) {
                    delivery.packages.forEach((packageInfo) => {
                        if (packageInfo?.packageType && packageInfo.packageType.name) {
                            packageTypeCountMap[packageInfo.packageType.name] = (packageTypeCountMap[packageInfo.packageType.name] || 0) + 1;
                        }
                    });
                }
            });

            // Count of each delivery route
            const deliveryRouteCountMap: Record<string, number> = {};

            // Loop through each delivery and count the routes
            deliveriesReport.forEach((delivery) => {
                const route = delivery.route;
                deliveryRouteCountMap[route] = (deliveryRouteCountMap[route] || 0) + 1;
            });

            // Count of deliveries with status "pending" or "completed"
            const pendingDeliveryCount = deliveriesReport.filter((delivery) => delivery.completed).length;
            const completedDeliveryCount = deliveriesReport.filter((delivery) => delivery.completed).length;

            res.status(200).json({
                count,
                stakeholderCount,
                packageTypeCountMap,
                deliveryRouteCountMap,
                pendingDeliveryCount,
                completedDeliveryCount,
            });
        } catch (error) {
            console.error('Error in getDeliveriesReport:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }



    async getDeliveriesByProjectId(req: Request, res: Response): Promise<void> {
        try {
            const projectId: number = parseInt(req.params.projectId, 10);
            const deliveries: Delivery[] = await this.deliveryService.getDeliveriesByProjectId(projectId);
            res.status(200).json(deliveries);
        } catch (error) {
            console.error('Error in getDeliveriesByProjectId:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async getDeliveriesByPackageId(req: Request, res: Response): Promise<void> {
        try {
            const packageId: number = parseInt(req.params.packageId, 10);

            if (isNaN(packageId)) {
                res.status(400).json({error: 'Invalid packageId'});
                return;
            }

            const deliveriesByPackage: DeliveryWithNestedObjects | null = await this.deliveryService.getDeliveryByPackageId(packageId);

            if (deliveriesByPackage === null) {
                res.status(404).json({error: 'Delivery not found'});
                return;
            }

            res.status(200).json(deliveriesByPackage);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

}
