// Create item
export interface CreateItemDTO {
    name: string;
    description: string;
    image: Express.Multer.File; // Multer file object
    projectId: number;
    quantity: number;
}


// Update item
export interface UpdateItemDTO {
    name: string;
    description: string;
    image: string;
    file?: Express.Multer.File | null;
    quantity: number;
}

// PackageItem.dto.ts
export interface CreatePackageItemDTO {
    itemID: number;
    packageTypeID: number;
    notes: string;
}