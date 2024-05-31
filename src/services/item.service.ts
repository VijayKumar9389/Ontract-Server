import {PrismaClient, Item, PackageItem} from '@prisma/client';
import {CreateItemDTO} from '../dtos/item.dto';
import {DeleteObjectCommand} from "@aws-sdk/client-s3";
import {bucketName, s3} from "../middleware/s3";

export class ItemService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // Create a new item
    async createItem(itemData: CreateItemDTO): Promise<Item> {
        try {
            const {projectId, image, ...rest} = itemData;
            return await this.prisma.item.create({
                data: {
                    ...rest,
                    image: image,
                    projectId: Number(itemData.projectId),
                },
            });
        } catch (error) {
            console.error('Error creating item:', error);
            throw new Error('Failed to create item');
        }
    }

    // Service method to update an item
    async updateItem(itemId: number, itemData: Item): Promise<Item> {
        try {
            const updatedItem: Item = await this.prisma.item.update({
                where: {id: itemId},
                data: {
                    ...itemData,
                },
            });
            return updatedItem;
        } catch (error) {
            console.error('Error updating item:', error);
            throw new Error('Failed to update item');
        }
    }

    getItemById(itemId: number): Promise<Item | null> {
        return this.prisma.item.findUnique({
            where: {id: itemId},
        });
    }

    // Get Package Items by Item ID
    getItemWithPackageItems(itemId: number): Promise<Item | null> {
        return this.prisma.item.findUnique({
            where: {id: itemId},
            include: {packageItems: true},
        });
    }

    // Get package Item by project ID
    getPackageItemsByProjectId(projectId: number): Promise<PackageItem[]> {
        return this.prisma.packageItem.findMany({
            where: {
                item: {
                    projectId: projectId,
                },
            },
        });
    }

    // Delete Item by ID
    async deleteItem(itemId: number): Promise<void> {
        try {
            // Retrieve the item from the database along with its associated packageItems
            const item = await this.prisma.item.findUnique({
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
            await this.prisma.item.delete({
                where: { id: itemId },
            });

            // If the item had an associated image, delete it from S3
            if (item.image) {
                const deleteParams = {
                    Bucket: bucketName,
                    Key: item.image,
                };
                await s3.send(new DeleteObjectCommand(deleteParams));
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            throw new Error('Failed to delete item');
        }
    }


    // Retrieve all items by project ID
    async getAllItemsByProjectId(projectId: string): Promise<Item[]> {
        try {
            return await this.prisma.item.findMany({
                where: {
                    projectId: parseInt(projectId, 10),
                },
            });
        } catch (error) {
            console.error('Error fetching items:', error);
            throw new Error('Failed to fetch items');
        }
    }

    // Create a new package item
    async createPackageItem(itemID: number, packageTypeID: number): Promise<PackageItem> {
        try {
            // Check if a PackageItem with the same itemID and packageTypeID already exists
            const existingPackageItem = await this.prisma.packageItem.findFirst({
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
            return await this.prisma.packageItem.create({
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

        } catch (error) {
            console.error('Error creating Package Item:', error);
            throw new Error('Failed to create Package Item');
        }
    }

    // Delete a package item by its ID
    async deletePackageItem(packageItemId: number): Promise<void> {
        try {
            await this.prisma.packageItem.delete({
                where: {
                    id: packageItemId,
                },
            });
            console.log(`Package Item with ID ${packageItemId} deleted successfully`);
        } catch (error) {
            console.error('Error deleting Package Item:', error);
            throw new Error('Failed to delete Package Item');
        }
    }

    // Update the quantity of a package item
    async updatePackageItemQuantity(packageItemId: number, quantity: number): Promise<void> {
        try {
            await this.prisma.packageItem.update({
                where: {id: packageItemId},
                data: {quantity: quantity},
            });
        } catch (error) {
            console.error('Error updating package item quantity:', error);
            throw new Error('Failed to update package item quantity');
        }
    }

    async getItemsByProjectId(projectId: number): Promise<Item[]> {
        try {
            const items = await this.prisma.item.findMany({
                where: {
                    projectId: projectId,
                },
            });
            return items;
        } catch (error) {
            console.error('Error fetching items:', error);
            throw new Error('Failed to fetch items');
        }
    }

    // Retrieve items by packageTypeId
    async getItemsByPackageTypeId(packageTypeId: number): Promise<Item[]> {
        try {
            const items = await this.prisma.item.findMany({
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
        } catch (error) {
            console.error('Error fetching items by packageTypeId:', error);
            throw new Error('Failed to fetch items');
        }
    }

}
