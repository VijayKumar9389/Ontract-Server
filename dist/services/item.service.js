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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const client_1 = require("@prisma/client");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class ItemService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    // Create a new item
    createItem(itemData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { projectId, image } = itemData, rest = __rest(itemData, ["projectId", "image"]);
                return yield this.prisma.item.create({
                    data: Object.assign(Object.assign({}, rest), { image: path_1.default.basename(image.path), projectId: Number(itemData.projectId) }),
                });
            }
            catch (error) {
                console.error('Error creating item:', error);
                throw new Error('Failed to create item');
            }
        });
    }
    // Service method to update an item
    updateItem(itemId, itemData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedItem = yield this.prisma.item.update({
                    where: { id: itemId },
                    data: Object.assign({}, itemData),
                });
                return updatedItem;
            }
            catch (error) {
                console.error('Error updating item:', error);
                throw new Error('Failed to update item');
            }
        });
    }
    getItemById(itemId) {
        return this.prisma.item.findUnique({
            where: { id: itemId },
        });
    }
    // Get Package Items by Item ID
    getItemWithPackageItems(itemId) {
        return this.prisma.item.findUnique({
            where: { id: itemId },
            include: { packageItems: true },
        });
    }
    // Get package Item by project ID
    getPackageItemsByProjectId(projectId) {
        return this.prisma.packageItem.findMany({
            where: {
                item: {
                    projectId: projectId,
                },
            },
        });
    }
    //Delete Item by ID
    deleteItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Retrieve the item from the database along with its associated packageItems
                const item = yield this.prisma.item.findUnique({
                    where: { id: itemId },
                    include: { packageItems: true },
                });
                // Check if the item exists
                if (!item) {
                    throw new Error('Item not found');
                }
                // Check if the item is associated with any packageItems
                if (item.packageItems.length > 0) {
                    throw new Error('Item is associated with package items. Cannot delete.');
                }
                // Delete the item from the database
                yield this.prisma.item.delete({
                    where: { id: itemId },
                });
                // Remove the associated image file from the file system
                const imagePath = path_1.default.join('uploads', path_1.default.basename(item.image));
                fs_1.default.unlinkSync(imagePath);
            }
            catch (error) {
                console.error('Error deleting item:', error);
                throw new Error('Failed to delete item');
            }
        });
    }
    // Retrieve all items by project ID
    getAllItemsByProjectId(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.item.findMany({
                    where: {
                        projectId: parseInt(projectId, 10),
                    },
                });
            }
            catch (error) {
                console.error('Error fetching items:', error);
                throw new Error('Failed to fetch items');
            }
        });
    }
    // Create a new package item
    createPackageItem(itemID, packageTypeID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if a PackageItem with the same itemID and packageTypeID already exists
                const existingPackageItem = yield this.prisma.packageItem.findFirst({
                    where: {
                        itemId: itemID,
                        packageTypeId: packageTypeID
                    }
                });
                if (existingPackageItem) {
                    // If a PackageItem already exists for this combination, throw an error or handle it as needed
                    throw new Error('PackageItem already exists for this Item and PackageType combination');
                }
                // Create the new PackageItem
                return yield this.prisma.packageItem.create({
                    data: {
                        quantity: 1,
                        packageType: {
                            connect: {
                                id: packageTypeID
                            }
                        },
                        item: {
                            connect: {
                                id: itemID
                            }
                        }
                    }
                });
            }
            catch (error) {
                console.error('Error creating Package Item:', error);
                throw new Error('Failed to create Package Item');
            }
        });
    }
    // Delete a package item by its ID
    deletePackageItem(packageItemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.packageItem.delete({
                    where: {
                        id: packageItemId,
                    },
                });
                console.log(`Package Item with ID ${packageItemId} deleted successfully`);
            }
            catch (error) {
                console.error('Error deleting Package Item:', error);
                throw new Error('Failed to delete Package Item');
            }
        });
    }
    // Update the quantity of a package item
    updatePackageItemQuantity(packageItemId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.prisma.packageItem.update({
                    where: { id: packageItemId },
                    data: { quantity: quantity },
                });
            }
            catch (error) {
                console.error('Error updating package item quantity:', error);
                throw new Error('Failed to update package item quantity');
            }
        });
    }
    getItemsByProjectId(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.prisma.item.findMany({
                    where: {
                        projectId: projectId,
                    },
                });
                return items;
            }
            catch (error) {
                console.error('Error fetching items:', error);
                throw new Error('Failed to fetch items');
            }
        });
    }
    // Retrieve items by packageTypeId
    getItemsByPackageTypeId(packageTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.prisma.item.findMany({
                    where: {
                        packageItems: {
                            some: {
                                packageType: {
                                    id: packageTypeId,
                                },
                            },
                        },
                    },
                });
                return items;
            }
            catch (error) {
                console.error('Error fetching items by packageTypeId:', error);
                throw new Error('Failed to fetch items');
            }
        });
    }
}
exports.ItemService = ItemService;
