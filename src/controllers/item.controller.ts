import path from 'path';
import { Request, Response } from 'express';
import { ItemService} from "../services/item.service";
import { CreateItemDTO } from '../dtos/item.dto';
import { Item } from '@prisma/client';

export class ItemController {
    private itemService: ItemService;

    constructor() {
        this.itemService = new ItemService();
    }

    // Create a new item
    async createItem(req: Request, res: Response): Promise<void> {
        try {
            // Get request body
            const { name, description, image, quantity } = req.body as CreateItemDTO;
            const imageFile: Express.Multer.File | undefined = req.file;

            // Validate request body
            if (!imageFile) {
                res.status(400).json({ message: 'Image file is required' });
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
            res.status(201).json({ message: 'Item created successfully', item: createdItem });
        } catch (error) {
            console.error('Error creating item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Get all items
    async getAllItems(req: Request, res: Response): Promise<void> {
        try {
            // Retrieve all items using the itemService
            const items: Item[] = await this.itemService.getAllItems();
            res.status(200).json(items);
        } catch (error) {
            console.error('Error fetching items:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
