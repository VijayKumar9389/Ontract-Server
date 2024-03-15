import path from 'path';
import {Request, Response} from 'express';
import {ItemService} from "../services/item.service";
import {CreateItemDTO, CreatePackageItemDTO, UpdateItemDTO} from '../dtos/item.dto';
import {Item} from '@prisma/client';
import fs from 'fs';
import {v4 as uuidv4} from 'uuid';

export class ItemController {
    private itemService: ItemService;

    constructor() {
        this.itemService = new ItemService();
    }

    // Create a new item
    async createItem(req: Request, res: Response): Promise<void> {
        try {
            // Get request body
            const {name, description, image, quantity} = req.body as CreateItemDTO;
            const imageFile: Express.Multer.File | undefined = req.file;
            console.log(req.file)

            // Validate request body
            if (!imageFile) {
                res.status(400).json({message: 'Image file is required'});
                return;
            }

            // Validate file type
            const imagePath: string = path.join('uploads', path.basename(imageFile.path));

            // Create item
            const itemInput: CreateItemDTO = {
                name,
                description,
                image: imageFile,
                projectId: req.body.projectId,
                quantity: parseInt(req.body.quantity, 10),
            };

            // Create a new item using the item service
            const createdItem: Item = await this.itemService.createItem(itemInput);

            console.log('successfully created item', itemInput);
            res.status(201).json({message: 'Item created successfully', item: createdItem});
        } catch (error) {
            console.error('Error creating item:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

// Assuming this method is inside a class or controller
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

            if (imageFile) {
                // Remove the current image file if it exists
                if (currentItem.image) {
                    const currentImagePath: string = path.join('uploads', currentItem.image);
                    fs.unlinkSync(currentImagePath);
                }

                // Validate file type
                const imagePath: string = path.basename(imageFile.path);

                // Update the image property in the database
                currentItem.image = imagePath;
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

    async deleteItem(req: Request, res: Response): Promise<void> {
        try {
            // Get item ID from request parameters
            const itemId: number = parseInt(req.params.itemId, 10);

            // Call the item service to delete the item
            await this.itemService.deleteItem(itemId);
            res.status(204).json(); // Respond with success status
        } catch (error) {
            console.error('Error deleting item:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }

// Get all items by project ID
    async getAllItems(req: Request, res: Response): Promise<void> {
        try {
            const projectId: string = req.params.projectId;

            // Retrieve items by project ID using the itemService
            const items: Item[] = await this.itemService.getAllItemsByProjectId(projectId);

            res.status(200).json(items);
        } catch (error) {
            console.error('Error fetching items:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

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
