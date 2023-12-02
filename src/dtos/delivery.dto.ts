export interface DeliveryDTO {
    route: string;
    destination: string;
    notes: string;
    status: string;
    projectId: number;
    stakeholderId: number; // Added stakeholderId to associate with a stakeholder
    packageTypeId: number; // Added packageTypeId to associate with a package type
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
