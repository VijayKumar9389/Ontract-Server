import {Delivery, Item, Package, PackageType, Stakeholder} from "@prisma/client";

// Create a new delivery
export interface CreateDeliveryDTO {
    route: string;
    destination: string;
    notes: string;
    projectId: number;
    stakeholderId: number;
    packageTypeId: number;
    delivery_method: string;
    carrier: string;
    completed: boolean;
    date: string;
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

// Edit delivery details
export interface EditDeliveryDTO {
    route: string;
    destination: string;
    delivery_method: string;
    notes: string;
}