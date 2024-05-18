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
exports.ItemController = void 0;
const path_1 = __importDefault(require("path"));
const item_service_1 = require("../services/item.service");
const fs_1 = __importDefault(require("fs"));
class ItemController {
    constructor() {
        this.itemService = new item_service_1.ItemService();
    }
    // Create a new item
    createItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get request body
                const { name, description, image, quantity } = req.body;
                const imageFile = req.file;
                console.log(req.file);
                // Validate request body
                if (!imageFile) {
                    res.status(400).json({ message: 'Image file is required' });
                    return;
                }
                // Validate file type
                const imagePath = path_1.default.join('uploads', path_1.default.basename(imageFile.path));
                // Create item
                const itemInput = {
                    name,
                    description,
                    image: imageFile,
                    projectId: req.body.projectId,
                    quantity: parseInt(req.body.quantity, 10),
                };
                // Create a new item using the item service
                const createdItem = yield this.itemService.createItem(itemInput);
                console.log('successfully created item', itemInput);
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
                // Validate request body
                if (imageFile) {
                    // Remove the current image file if it exists
                    if (currentItem.image) {
                        const currentImagePath = path_1.default.join('uploads', currentItem.image);
                        fs_1.default.unlinkSync(currentImagePath);
                    }
                    // Validate file type
                    const imagePath = path_1.default.basename(imageFile.path);
                    // Update the image property in the database
                    currentItem.image = imagePath;
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
                // Call the item service to delete the item
                yield this.itemService.deleteItem(itemId);
                res.status(204).json(); // Respond with success status
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
