import {PrismaClient, Item} from '@prisma/client';
import {CreateItemDTO} from '../dtos/item.dto';
import path from 'path';

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
                    image: path.basename(image.path),
                    projectId: Number(itemData.projectId),
                },
            });
        } catch (error) {
            console.error('Error creating item:', error);
            throw new Error('Failed to create item');
        }
    }

    // Get all items
    async getAllItems(): Promise<Item[]> {
        try {
            return await this.prisma.item.findMany();
        } catch (error) {
            console.error('Error fetching items:', error);
            throw new Error('Failed to fetch items');
        }
    }
}
