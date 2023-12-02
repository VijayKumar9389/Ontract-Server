// dtos/userInputDTO.ts
export interface CreateUserDTO {
    username: string;
    password: string;
}

// dtos/userOutputDTO.ts
export interface UserOutputDTO {
    id: number;
    username: string;
    isAdmin: boolean;
}
