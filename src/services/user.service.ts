import {PrismaClient, User} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {CreateUserDTO, UserOutputDTO} from '../dtos/user.dto';

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

    async login(username: string, password: string): Promise<TokenResponse> {
        try {
            const user = await this.prisma.user.findUnique({
                where: {username},
            });

            if (!user) {
                throw new Error('User does not exist');
            }

            const passwordMatch: boolean = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                throw new Error('Incorrect password');
            }

            const token: string = this.generateAccessToken(user);
            const refreshToken: string = jwt.sign({user}, 'secret', {expiresIn: '8hr'});

            console.log(`${user.username} successfully logged in`);

            return {
                auth: true,
                accessToken: token,
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
            const users = await this.prisma.user.findMany();
            // Map the Prisma entities to UserOutputDTO, excluding the password
            const usersDTO: UserOutputDTO[] = users.map(user => ({
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin,
            }));
            return usersDTO;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    // Register a new user
    async register(createUserDTO: CreateUserDTO): Promise<User> {
        try {
            const saltRounds: number = 10;
            const hashedPassword: string = await bcrypt.hash(createUserDTO.password, saltRounds);

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
            const decodedRefreshToken = jwt.verify(refreshToken, 'secret') as jwt.JwtPayload;

            // Extract user information
            const user = {
                id: decodedRefreshToken.id as number,
                isAdmin: decodedRefreshToken.isAdmin as boolean,
                username: decodedRefreshToken.username as string,
                password: '',
            };

            // Generate a new access token
            const newAccessToken: string = this.generateAccessToken(user);

            return {
                auth: true,
                accessToken: newAccessToken,
            };
        } catch (error: any) {
            throw new Error('Invalid refresh token');
        }
    }

    // Generate an access token
    private generateAccessToken(user: any): string {
        const secretKey = 'secret';
        const expiresIn = '15min';

        return jwt.sign(
            {
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin,
            },
            secretKey,
            {expiresIn}
        );
    }
}

export default UserService;
