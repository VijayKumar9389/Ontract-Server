import {PrismaClient, User} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {CreateUserDTO, UserOutputDTO} from '../dtos/user.dto';
import {generateAccessToken, generateRefreshToken, validateRefreshToken} from "../utils/token.utils";

interface TokenResponse {
    auth: boolean;
    accessToken: string;
    refreshToken?: string;
    user?: string;
}

class UserService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // Login a user
    async login(username: string, password: string): Promise<TokenResponse> {
        try {
            // Find the user in the database
            const user = await this.prisma.user.findUnique({
                where: {username},
            });

            // Check if the user exists
            if (!user) {
                throw new Error('User does not exist');
            }

            // Check if the password matches
            const passwordMatch: boolean = await bcrypt.compare(password, user.password);

            // If the password does not match, throw an error
            if (!passwordMatch) {
                throw new Error('Incorrect password');
            }

            // Generate an access token and a refresh token
            const accessToken: string = generateAccessToken(user);
            const refreshToken: string = generateRefreshToken(user);

            return {
                auth: true,
                accessToken: accessToken,
                refreshToken: refreshToken,
                user: user.username,
            };
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    // Get all users
    async getUsers(): Promise<UserOutputDTO[]> {
        try {
            // Fetch all users from the database
            const users = await this.prisma.user.findMany();

            // Map the Prisma entities to UserOutputDTO, excluding the password
            const usersDTO: UserOutputDTO[] = users.map(user => ({
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin,
            }));

            // Return the DTO
            return usersDTO;

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    // Register a new user
    async register(createUserDTO: CreateUserDTO): Promise<User> {
        try {
            // Hash the password
            const saltRounds: number = 10;
            const hashedPassword: string = await bcrypt.hash(createUserDTO.password, saltRounds);

            // Create the user in the database
            return await this.prisma.user.create({
                data: {
                    username: createUserDTO.username,
                    password: hashedPassword,
                },
            });

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    // Delete a user
    async deleteUser(id: number): Promise<User> {
        try {
            return await this.prisma.user.delete({
                where: {id},
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    //Edit a user
    async editUser(id: number, username: string, password: string): Promise<User> {
        try {
            const saltRounds: number = 10;
            const hashedPassword: string = await bcrypt.hash(password, saltRounds);
            return await this.prisma.user.update({
                where: {id},
                data: {username, password: hashedPassword},
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    // Add a method to refresh the access token
    async refreshAccessToken(refreshToken: string): Promise<TokenResponse> {
        try {
            // Verify the refresh token
            const decodedRefreshToken = validateRefreshToken(refreshToken);

            // Extract user information to generate a new access token
            const user: User = {
                id: decodedRefreshToken.id as number,
                isAdmin: decodedRefreshToken.isAdmin as boolean,
                username: decodedRefreshToken.username as string,
                password: '',
            };

            const newAccessToken: string = generateAccessToken(user);

            return {
                auth: true,
                accessToken: newAccessToken,
            };
        } catch (error: any) {
            throw new Error('Invalid refresh token');
        }
    }
}

export default UserService;
