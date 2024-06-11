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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const item_service_1 = require("../services/item.service");
const uuid_1 = require("uuid");
const s3_1 = require("../middleware/s3");
const client_s3_1 = require("@aws-sdk/client-s3");
class ItemController {
    constructor() {
        this.itemService = new item_service_1.ItemService();
    }
    createItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get request body
                const { name, description, quantity } = req.body;
                const imageFile = req.file;
                // Validate request body
                if (!imageFile) {
                    res.status(400).json({ message: 'Image file is required' });
                    return;
                }
                // Determine the environment
                const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
                // Generate a unique filename for the S3 object
                const randomName = (0, uuid_1.v4)();
                // Create a key with the environment folder
                const key = `${environment}/${randomName}`;
                // Upload image to S3
                const uploadParams = {
                    Bucket: s3_1.bucketName,
                    Key: key,
                    Body: imageFile.buffer,
                    ContentType: imageFile.mimetype,
                };
                // Upload the image to S3
                yield s3_1.s3.send(new client_s3_1.PutObjectCommand(uploadParams));
                // Create item with the S3 file path
                const itemInput = {
                    name,
                    description,
                    image: randomName, // Store the S3 file path or URL
                    projectId: req.body.projectId,
                    quantity: parseInt(quantity, 10),
                };
                // Create the item using the itemService
                const createdItem = yield this.itemService.createItem(itemInput);
                res.status(201).json({ message: 'Item created successfully', item: createdItem });
            }
            catch (error) {
                console.error('Error creating item:', error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    // Update an existing item
    updateItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itemId = parseInt(req.params.itemId, 10);
                const { name, description, quantity } = req.body;
                const imageFile = req.file;
                // Fetch the current item from the database
                const currentItem = yield this.itemService.getItemById(itemId);
                // Check if the item exists
                if (!currentItem) {
                    res.status(404).json({ message: 'Item not found' });
                    return;
                }
                // Determine the environment
                const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
                // Validate request body
                if (imageFile) {
                    // Upload the new image to S3
                    const randomName = (0, uuid_1.v4)();
                    // Create a key with the environment folder
                    const newKey = `${environment}/${randomName}`;
                    const uploadParams = {
                        Bucket: s3_1.bucketName,
                        Key: newKey,
                        Body: imageFile.buffer,
                        ContentType: imageFile.mimetype,
                    };
                    yield s3_1.s3.send(new client_s3_1.PutObjectCommand(uploadParams));
                    const deletekey = `${environment}/${currentItem.image}`;
                    // Remove the current image file from S3 if it exists
                    if (currentItem.image) {
                        const deleteParams = {
                            Bucket: s3_1.bucketName,
                            Key: deletekey,
                        };
                        yield s3_1.s3.send(new client_s3_1.DeleteObjectCommand(deleteParams));
                    }
                    // Update the image property in the database with the new S3 key
                    currentItem.image = randomName;
                }
                // Update other properties of the item
                currentItem.name = name;
                currentItem.description = description;
                currentItem.quantity = parseInt(String(quantity), 10); // Parse quantity as integer
                // Save the updated item to the database
                yield this.itemService.updateItem(itemId, currentItem);
                res.status(200).json({ message: 'Item updated successfully' });
            }
            catch (error) {
                console.error('Error updating item:', error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    //Get an item along with its package items by item ID
    getItemWithPackageItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const itemId = parseInt(req.params.itemId, 10);
                const items = yield this.itemService.getItemWithPackageItems(itemId);
                res.status(200).json(items);
            }
            catch (error) {
                console.error('Error fetching items:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    // Delete an item by Item ID
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get item ID from request parameters
                const itemId = parseInt(req.params.itemId, 10);
                // Delete the item using the service
                yield this.itemService.deleteItem(itemId);
                // Respond with success status
                res.status(204).json();
            }
            catch (error) {
                console.error('Error deleting item:', error);
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    // Get all items by project ID
    getAllItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get project ID from request parameters
                const projectId = req.params.projectId;
                // Retrieve items by project ID using the itemService
                const items = yield this.itemService.getAllItemsByProjectId(projectId);
                res.status(200).json(items);
            }
            catch (error) {
                console.error('Error fetching items:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    // Create a new package item
    createPackageItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { itemID, packageTypeID } = req.body;
                // Validate input if necessary
                const packageItem = yield this.itemService.createPackageItem(itemID, packageTypeID);
                res.status(201).json(packageItem);
            }
            catch (error) {
                console.error('Error creating package item:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Delete a package item by ID
    deletePackageItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.itemService.deletePackageItem(Number(id));
                res.status(204).send();
            }
            catch (error) {
                console.error('Error deleting package item:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Get items by packageTypeId
    getItemsByPackageTypeId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { packageTypeId } = req.params;
                const items = yield this.itemService.getItemsByPackageTypeId(Number(packageTypeId));
                res.status(200).json(items);
            }
            catch (error) {
                console.error('Error fetching items by packageTypeId:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Update package item quantity
    updatePackageItemQuantity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { quantity } = req.body;
                const packageItemId = Number(id);
                // Update package item quantity
                yield this.itemService.updatePackageItemQuantity(packageItemId, quantity);
                // If quantity is 0, delete the package item
                if (quantity === 0) {
                    yield this.itemService.deletePackageItem(packageItemId);
                    res.status(200).json({ message: `Package item with ID ${packageItemId} deleted successfully` });
                }
                else {
                    res.status(200).json({ message: 'Package item quantity updated successfully' });
                }
            }
            catch (error) {
                console.error('Error updating package item quantity:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Get package items by Project Id
    getPackageItemsByProjectId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { projectId } = req.params;
                const packageItems = yield this.itemService.getPackageItemsByProjectId(Number(projectId));
                res.status(200).json(packageItems);
            }
            catch (error) {
                console.error('Error fetching package items by projectId:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.ItemController = ItemController;
