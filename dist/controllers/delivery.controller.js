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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryController = void 0;
const delivery_service_1 = __importDefault(require("../services/delivery.service"));
const stakeholder_service_1 = require("../services/stakeholder.service");
class DeliveryController {
    constructor() {
        this.deliveryService = new delivery_service_1.default();
        this.stakeholderService = new stakeholder_service_1.StakeholderService();
    }
    // Create a new delivery
    createDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Input validation - Ensure that the request body contains necessary data.
                const deliveryData = req.body;
                const newDelivery = yield this.deliveryService.createDelivery(deliveryData);
                //const newDelivery: Delivery | null = await this.deliveryService.createDelivery(deliveryData);
                if (newDelivery) {
                    res.status(201).json(newDelivery);
                }
                else {
                    res.status(500).json({ error: 'Error creating delivery' });
                }
            }
            catch (error) {
                console.error('Error creating delivery:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Edit delivery details
    editDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deliveryId = parseInt(req.params.deliveryId, 10);
                const deliveryData = req.body;
                const updatedDelivery = yield this.deliveryService.editDelivery(deliveryId, deliveryData);
                if (updatedDelivery) {
                    res.status(200).json(updatedDelivery);
                }
                else {
                    res.status(404).json({ error: 'Delivery not found' });
                }
            }
            catch (error) {
                console.error('Error editing delivery:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Get Delivery by ID
    getDeliveryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deliveryId = parseInt(req.params.deliveryId, 10);
                const delivery = yield this.deliveryService.getDeliveryById(deliveryId);
                if (delivery) {
                    res.status(200).json(delivery);
                }
                else {
                    res.status(404).json({ error: 'Delivery not found' });
                }
            }
            catch (error) {
                console.error('Error in getDeliveryById:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Cansel delivery by ID
    cancelDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deliveryId = parseInt(req.params.deliveryId, 10);
                yield this.deliveryService.cancelDelivery(deliveryId);
                res.status(204).json();
            }
            catch (error) {
                console.error('Error in cancelDelivery:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Set Completed delivery by ID
    setCompletedDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deliveryId = parseInt(req.params.deliveryId, 10);
                const completedDate = req.body.date;
                yield this.deliveryService.setCompletedDelivery(deliveryId, completedDate);
                yield this.stakeholderService.updateStakeholderConsultationByDeliveryId(deliveryId, completedDate);
                res.status(204).json();
            }
            catch (error) {
                console.error('Error in setCompletedDelivery:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Get deliveries report
    getDeliveriesReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectId = parseInt(req.params.projectId, 10);
            try {
                // Get all deliveries for a project
                const deliveriesReport = yield this.deliveryService.getDeliveriesByProjectId(projectId);
                // Count of deliveries in report
                const count = deliveriesReport.length;
                // Count of stakeholders
                const stakeholderCount = deliveriesReport.reduce((totalStakeholders, delivery) => {
                    // For each delivery in the deliveriesReport array,
                    // if there are packages in the delivery, add the count of packages to the total count of stakeholders.
                    // If there are no packages, add 0 to the total count of stakeholders.
                    return totalStakeholders + (delivery.packages ? delivery.packages.length : 0);
                }, 0);
                // Count of each package type
                const packageTypeCountMap = {};
                // Loop through each delivery and count the package types
                deliveriesReport.forEach((delivery) => {
                    if (delivery.packages) {
                        delivery.packages.forEach((packageInfo) => {
                            if ((packageInfo === null || packageInfo === void 0 ? void 0 : packageInfo.packageType) && packageInfo.packageType.name) {
                                packageTypeCountMap[packageInfo.packageType.name] = (packageTypeCountMap[packageInfo.packageType.name] || 0) + 1;
                            }
                        });
                    }
                });
                // Count of each delivery route
                const deliveryRouteCountMap = {};
                // Loop through each delivery and count the routes
                deliveriesReport.forEach((delivery) => {
                    const route = delivery.route;
                    deliveryRouteCountMap[route] = (deliveryRouteCountMap[route] || 0) + 1;
                });
                // Count of deliveries with status "pending" or "completed"
                const pendingDeliveryCount = deliveriesReport.filter((delivery) => !delivery.completed).length;
                const completedDeliveryCount = deliveriesReport.filter((delivery) => delivery.completed).length;
                const deliveryCount = deliveriesReport.filter((delivery) => delivery.delivery_method === 'person').length;
                const mailCount = deliveriesReport.filter((delivery) => delivery.delivery_method === 'mail').length;
                // Return the report
                res.status(200).json({
                    count,
                    stakeholderCount,
                    packageTypeCountMap,
                    deliveryRouteCountMap,
                    pendingDeliveryCount,
                    completedDeliveryCount,
                    deliveryCount,
                    mailCount
                });
            }
            catch (error) {
                console.error('Error in getDeliveriesReport:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    //Get deliveries by project Id
    getDeliveriesByProjectId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectId = parseInt(req.params.projectId, 10);
                const deliveries = yield this.deliveryService.getDeliveriesByProjectId(projectId);
                res.status(200).json(deliveries);
            }
            catch (error) {
                console.error('Error in getDeliveriesByProjectId:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    //get deliveries by Package Id
    getDeliveriesByPackageId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const packageId = parseInt(req.params.packageId, 10);
                if (isNaN(packageId)) {
                    res.status(400).json({ error: 'Invalid packageId' });
                    return;
                }
                const deliveriesByPackage = yield this.deliveryService.getDeliveryByPackageId(packageId);
                if (deliveriesByPackage === null) {
                    res.status(404).json({ error: 'Delivery not found' });
                    return;
                }
                res.status(200).json(deliveriesByPackage);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.DeliveryController = DeliveryController;
