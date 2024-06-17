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
const client_1 = require("@prisma/client");
const package_service_1 = __importDefault(require("./package.service"));
class DeliveryService {
    constructor() {
        this.packageService = new package_service_1.default();
        this.prisma = new client_1.PrismaClient();
    }
    // Create a new delivery
    createDelivery(deliveryData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const currentDate = new Date();
                const newDelivery = yield this.createNewDelivery(deliveryData, currentDate);
                const newPackage = yield this.packageService.createNewPackage(deliveryData, newDelivery.id);
                return this.fetchDeliveryWithPackages(newDelivery.id);
            }
            catch (error) {
                console.error('Error creating delivery:', error);
                return null;
            }
        });
    }
    // Cancel a delivery and delete associated packages
    cancelDelivery(deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Retrieve the delivery to get associated packages, packageType, items, and stakeholder
                const delivery = yield this.prisma.delivery.findUnique({
                    where: { id: deliveryId },
                    include: {
                        packages: {
                            include: {
                                packageType: {
                                    include: {
                                        items: {
                                            include: {
                                                item: true,
                                            },
                                        },
                                    },
                                },
                                stakeholder: true,
                            },
                        },
                    },
                });
                // Throw an error if the delivery is not found
                if (!delivery) {
                    throw new Error(`Delivery with ID ${deliveryId} not found.`);
                }
                // Cancel each associated package
                for (const deliveryPackage of delivery.packages) {
                    yield this.packageService.cancelPackage(deliveryPackage.id, deliveryPackage.stakeholderId);
                }
                // Additional logic for canceling the delivery
                yield this.prisma.delivery.delete({
                    where: { id: deliveryId },
                });
            }
            catch (error) {
                console.error('Error canceling delivery and deleting packages:', error);
                throw new Error('Failed to cancel delivery and delete packages');
            }
        });
    }
    // Set delivery as completed
    setCompletedDelivery(deliveryId, date) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedDelivery = yield this.prisma.delivery.update({
                    where: { id: deliveryId },
                    data: {
                        completed: true,
                        date: date,
                    },
                });
                return this.fetchDeliveryWithPackages(deliveryId);
            }
            catch (error) {
                console.error('Error setting delivery completed:', error);
                return null;
            }
        });
    }
    // Undo delivery completion
    undoCompletedDelivery(deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedDelivery = yield this.prisma.delivery.update({
                    where: { id: deliveryId },
                    data: {
                        completed: false,
                        date: null,
                    },
                });
                return this.fetchDeliveryWithPackages(deliveryId);
            }
            catch (error) {
                console.error('Error undoing delivery completion:', error);
                return null;
            }
        });
    }
    // Create a new delivery in the database
    createNewDelivery(deliveryData, currentDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.delivery.create({
                data: {
                    date: null,
                    route: deliveryData.route,
                    destination: deliveryData.destination,
                    notes: deliveryData.notes,
                    delivery_method: deliveryData.delivery_method, // Include new field
                    carrier: null, // Include new field
                    completed: false, // Include new field
                    projectId: deliveryData.projectId,
                },
                include: {
                    packages: true,
                },
            });
        });
    }
    // Edit a delivery in the database
    editDelivery(deliveryId, deliveryData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Update the delivery with the new data
                yield this.prisma.delivery.update({
                    where: { id: deliveryId },
                    data: {
                        route: deliveryData.route,
                        destination: deliveryData.destination,
                        delivery_method: deliveryData.delivery_method,
                        notes: deliveryData.notes,
                    },
                });
                // Fetch the updated delivery with its packages
                return this.fetchDeliveryWithPackages(deliveryId);
            }
            catch (error) {
                console.error('Error editing delivery:', error);
                return null;
            }
        });
    }
    // Fetch a delivery with its packages from the database
    fetchDeliveryWithPackages(deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.delivery.findUnique({
                where: {
                    id: deliveryId
                },
                include: {
                    packages: true,
                },
            });
        });
    }
    getDeliveryById(deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch a single delivery with the specified id
                return yield this.prisma.delivery.findUnique({
                    where: {
                        id: deliveryId,
                    },
                    include: {
                        packages: {
                            include: {
                                packageType: {
                                    include: {
                                        items: {
                                            include: {
                                                item: true, // Include the Item object
                                            },
                                        },
                                    },
                                },
                                stakeholder: true,
                            },
                        },
                        // Include other relations or fields as needed
                    },
                });
            }
            catch (error) {
                console.error('Error fetching delivery by id:', error);
                throw new Error('Failed to fetch delivery by id');
            }
        });
    }
    // Fetch a delivery from the database by its id
    getDeliveryByPackageId(packageId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch a single delivery with the specified packageId
                return yield this.prisma.delivery.findFirst({
                    where: {
                        packages: {
                            some: {
                                id: packageId,
                            },
                        },
                    },
                    include: {
                        packages: {
                            include: {
                                packageType: {
                                    include: {
                                        items: {
                                            include: {
                                                item: true, // Include the Item object
                                            },
                                        }
                                    },
                                },
                                stakeholder: true,
                            },
                        },
                        // Include other relations or fields as needed
                    },
                });
            }
            catch (error) {
                console.error('Error fetching delivery by packageId:', error);
                throw new Error('Failed to fetch delivery by packageId');
            }
        });
    }
    // Fetch all deliveries from the database by projectId
    getDeliveriesByProjectId(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch deliveries with the specified projectId
                return yield this.prisma.delivery.findMany({
                    where: {
                        project: {
                            id: projectId,
                        },
                    },
                    include: {
                        packages: {
                            include: {
                                packageType: {
                                    include: {
                                        items: {
                                            include: {
                                                item: true, // Include the Item object
                                            },
                                        },
                                    },
                                },
                                stakeholder: true,
                            },
                        },
                        // Include other relations or fields as needed
                    },
                });
            }
            catch (error) {
                console.error('Error fetching deliveries by projectId:', error);
                throw new Error('Failed to fetch deliveries by projectId');
            }
        });
    }
}
exports.default = DeliveryService;
