// Create item
export interface CreateItemDTO {
    name: string;
    description: string;
    image: string; // Multer file object
    projectId: number;
    quantity: number;
}

// Update item
export interface UpdateItemDTO {
    id: number;
    name: string;
    description: string;
    quantity: number;
    image?: Express.Multer.File | null;
}

// PackageItem.dto.ts
export interface CreatePackageItemDTO {
    itemID: number;
    packageTypeID: number;
}