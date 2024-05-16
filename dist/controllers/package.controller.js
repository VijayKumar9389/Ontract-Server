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
exports.PackageController = void 0;
const package_service_1 = __importDefault(require("../services/package.service")); // Adjust the path based on your actual structure
class PackageController {
    constructor() {
        this.packageService = new package_service_1.default();
    }
    //Create a new package type
    createPackageType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Extract projectId from request parameters
                const { projectId } = req.params;
                const packageTypeDTO = req.body;
                // Assuming your packageService.createPackageType function now requires projectId
                const createdPackageType = yield this.packageService.createPackageType(projectId, packageTypeDTO);
                // Respond with the created package type
                res.status(201).json(createdPackageType);
            }
            catch (error) {
                console.error(error);
                // Handle errors and respond with an appropriate error message
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Change a package's package type
    changePackagePackageType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { packageId, packageTypeId } = req.params;
                yield this.packageService.changePackagePackageType(parseInt(packageId, 10), parseInt(packageTypeId, 10));
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Cancel a package
    cancelPackage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { packageId, stakeholderId } = req.params;
                yield this.packageService.cancelPackage(parseInt(packageId, 10), parseInt(stakeholderId, 10));
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Create a new package and add it to an existing delivery
    createPackageForExistingDelivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Extract data from the request body using the PackageAddDTO
                const { packageTypeId, deliveryId, stakeholderId } = req.body;
                // Call the service method to create a new package for an existing delivery
                const newPackage = yield this.packageService.createPackageForExistingDelivery(parseInt(stakeholderId), // Assuming stakeholderId is a number
                parseInt(packageTypeId), parseInt(deliveryId));
                // Respond with the created package
                res.status(201).json(newPackage);
            }
            catch (error) {
                console.error(error);
                // Handle errors and respond with an appropriate error message
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Create a new package and delivery
    getPackageTypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { packageTypeId } = req.params;
                const packageType = yield this.packageService.getPackageTypeById(parseInt(packageTypeId, 10));
                if (packageType) {
                    res.status(200).json(packageType);
                }
                else {
                    res.status(404).json({ error: 'Package type not found' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getAllPackageTypes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Extract projectId from request parameters
                const { projectId } = req.params;
                // Assuming your packageService.getAllPackageTypes function now requires projectId
                const packageTypes = yield this.packageService.getAllPackageTypes(projectId);
                // Respond with the retrieved package types
                res.status(200).json(packageTypes);
            }
            catch (error) {
                console.error(error);
                // Handle errors and respond with an appropriate error message
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getPackageByPackageTypeId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { packageTypeId } = req.params;
                const packages = yield this.packageService.getPackageByPackageTypeId(parseInt(packageTypeId, 10));
                res.status(200).json(packages);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // update package type
    updatePackageType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.packageTypeId, 10);
                const packageTypeDTO = req.body;
                const updatedPackageType = yield this.packageService.updatePackageType(id, packageTypeDTO);
                res.status(200).json(updatedPackageType);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getPackageByPackageItemId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Received package item ID:', req.params.packageItemId);
            try {
                const { packageItemId } = req.params;
                const packages = yield this.packageService.getPackageByPackageItemId(parseInt(packageItemId, 10));
                console.log('Retrieved packages:', packages);
                res.status(200).json(packages);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    deletePackageType(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.packageTypeId, 10);
                console.log('Received package type ID:', id);
                yield this.packageService.deletePackageType(id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.PackageController = PackageController;
