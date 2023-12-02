
export interface CreateItemDTO {
    name: string;
    description: string;
    image: Express.Multer.File; // Multer file object
    projectId: number;
    quantity: number;
}
