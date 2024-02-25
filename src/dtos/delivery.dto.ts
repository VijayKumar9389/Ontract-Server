import {Delivery, Item, Stakeholder, PackageType, Package} from "@prisma/client";

export interface DeliveryDTO {
    route: string;
    destination: string;
    notes: string;
    status: string;
    projectId: number;
    stakeholderId: number;
    packageTypeId: number;
    delivery_method: string; // Added delivery_method
    carrier: string; // Added carrier
    completed: boolean; // Added completed
    date: string; // Adjusted date type based on your needs (string, Date, etc.)
}

export interface PackageDTO {
    packageType?: PackageTypeDTO;
    deliveryId: number;
    stakeholderId: number;
}

export interface PackageTypeDTO {
    name: string;
    notes: string;
}

export type DeliveryWithNestedObjects = Delivery & {
    packages?: (PackageWithNestedObjects | null)[];
};

export type PackageWithNestedObjects = Package & {
    packageType: PackageTypeWithItems | null;
    stakeholder: Stakeholder;
};

export type PackageTypeWithItems = PackageType & {
    items: Item[];
} | null;

