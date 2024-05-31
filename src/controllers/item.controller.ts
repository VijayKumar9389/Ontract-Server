import path from 'path';
import {Request, Response} from 'express';
import {ItemService} from "../services/item.service";
import {CreatePackageItemDTO, UpdateItemDTO} from '../dtos/item.dto';
import {Item} from '@prisma/client';
import {v4 as uuidv4} from 'uuid';
import {bucketName, s3} from "../middleware/s3";
import {DeleteObjectCommand, PutObjectCommand} from "@aws-sdk/client-s3";

export class ItemController {
    private itemService: ItemService;

    constructor() {
        this.itemService = new ItemService();
    }

    // Create a new item
    async createItem(req: Request, res: Response): Promise<void> {
        try {
            // Get request body
            const { name, description, quantity } = req.body;
            const imageFile: Express.Multer.File | undefined = req.file;

            // Validate request body
            if (!imageFile) {
                res.status(400).json({ message: 'Image file is required' });
                return;
            }

            // Generate a unique filename for the S3 object
            const randomName: string = uuidv4();

            // Upload image to S3
            const uploadParams = {
                Bucket: bucketName,
                Key: randomName,
                Body: imageFile.buffer,
                ContentType: imageFile.mimetype,
            };

            // Upload the image to S3
            await s3.send(new PutObjectCommand(uploadParams));

            // Create item with the S3 file path
            const itemInput = {
                name,
                description,
                image: randomName,  // Store the S3 file path or URL
                projectId: req.body.projectId,
                quantity: parseInt(quantity, 10),
            };

            // Create the item using the itemService
            const createdItem = await this.itemService.createItem(itemInput);

            res.status(201).json({ message: 'Item created successfully', item: createdItem });
        } catch (error) {
            console.error('Error creating item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Update an existing item
    async updateItem(req: Request, res: Response): Promise<void> {
        try {
            const itemId: number = parseInt(req.params.itemId, 10);
            const { name, description, quantity } = req.body as UpdateItemDTO;
            const imageFile: Express.Multer.File | undefined = req.file;

            // Fetch the current item from the database
            const currentItem: Item | null = await this.itemService.getItemById(itemId);

            // Check if the item exists
            if (!currentItem) {
                res.status(404).json({ message: 'Item not found' });
                return;
            }

            // Validate request body
            if (imageFile) {
                // Upload the new image to S3
                const randomName: string = uuidv4();
                const uploadParams = {
                    Bucket: bucketName,
                    Key: randomName,
                    Body: imageFile.buffer,
                    ContentType: imageFile.mimetype,
                };
                await s3.send(new PutObjectCommand(uploadParams));

                // Remove the current image file from S3 if it exists
                if (currentItem.image) {
                    const deleteParams = {
                        Bucket: bucketName,
                        Key: currentItem.image,
                    };
                    await s3.send(new DeleteObjectCommand(deleteParams));
                }

                // Update the image property in the database with the new S3 key
                currentItem.image = randomName;
            }

            // Update other properties of the item
            currentItem.name = name;
            currentItem.description = description;
            currentItem.quantity = parseInt(String(quantity), 10); // Parse quantity as integer

            // Save the updated item to the database
            await this.itemService.updateItem(itemId, currentItem);

            res.status(200).json({ message: 'Item updated successfully' });
        } catch (error) {
            console.error('Error updating item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }


    //Get an item along with its package items by item ID
    async getItemWithPackageItems(req: Request, res: Response): Promise<void> {
        try {
            const itemId: number = parseInt(req.params.itemId, 10);
            const items = await this.itemService.getItemWithPackageItems(itemId);
            res.status(200).json(items);
        } catch (error) {
            console.error('Error fetching items:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

    // Delete an item by Item ID
    async deleteItem(req: Request, res: Response): Promise<void> {
        try {
            // Get item ID from request parameters
            const itemId: number = parseInt(req.params.itemId, 10);

            // Delete the item using the service
            await this.itemService.deleteItem(itemId);

            // Respond with success status
            res.status(204).json();
        } catch (error) {
            console.error('Error deleting item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Get all items by project ID
    async getAllItems(req: Request, res: Response): Promise<void> {
        try {
            // Get project ID from request parameters
            const projectId: string = req.params.projectId;
            // Retrieve items by project ID using the itemService
            const items: Item[] = await this.itemService.getAllItemsByProjectId(projectId);
            res.status(200).json(items);
        } catch (error) {
            console.error('Error fetching items:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

    // Create a new package item
    async createPackageItem(req: Request, res: Response): Promise<void> {
        try {
            const {itemID, packageTypeID} = req.body as CreatePackageItemDTO;
            // Validate input if necessary
            const packageItem = await this.itemService.createPackageItem(itemID, packageTypeID);
            res.status(201).json(packageItem);
        } catch (error) {
            console.error('Error creating package item:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Delete a package item by ID
    async deletePackageItem(req: Request, res: Response): Promise<void> {
        try {
            const {id} = req.params;
            await this.itemService.deletePackageItem(Number(id));
            res.status(204).send();
        } catch (error) {
            console.error('Error deleting package item:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Get items by packageTypeId
    async getItemsByPackageTypeId(req: Request, res: Response): Promise<void> {
        try {
            const {packageTypeId} = req.params;
            const items = await this.itemService.getItemsByPackageTypeId(Number(packageTypeId));
            res.status(200).json(items);
        } catch (error) {
            console.error('Error fetching items by packageTypeId:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

    // Update package item quantity
    async updatePackageItemQuantity(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { quantity } = req.body;
            const packageItemId: number = Number(id);

            // Update package item quantity
            await this.itemService.updatePackageItemQuantity(packageItemId, quantity);

            // If quantity is 0, delete the package item
            if (quantity === 0) {
                await this.itemService.deletePackageItem(packageItemId);
                res.status(200).json({ message: `Package item with ID ${packageItemId} deleted successfully` });
            } else {
                res.status(200).json({ message: 'Package item quantity updated successfully' });
            }
        } catch (error) {
            console.error('Error updating package item quantity:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    // Get package items by Project Id
    async getPackageItemsByProjectId(req: Request, res: Response): Promise<void> {
        try {
            const {projectId} = req.params;
            const packageItems = await this.itemService.getPackageItemsByProjectId(Number(projectId));
            res.status(200).json(packageItems);
        } catch (error) {
            console.error('Error fetching package items by projectId:', error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    }

}
