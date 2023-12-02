import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CreateUserDTO } from '../dtos/user.dto';

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
                where: { username },
            });

            if (!user) {
                throw new Error('User does not exist');
            }

            const passwordMatch: boolean = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                throw new Error('Incorrect password');
            }

            const token = this.generateAccessToken(user);
            const refreshToken = jwt.sign({ user }, 'secret', { expiresIn: '12hr' });

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

    async refreshToken(refreshToken: string): Promise<TokenResponse> {
        try {
            const token = jwt.decode(refreshToken) as jwt.JwtPayload | null;

            if (!token) {
                throw new Error('Invalid token');
            }

            const user = {
                id: token?.id as number,
                isAdmin: token?.isAdmin as boolean,
                username: token?.username as string,
                password: '',
            };

            const accessToken = this.generateAccessToken(user);

            return {
                auth: true,
                accessToken: accessToken,
            };
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    private generateAccessToken(user: any): string {
        const secretKey = 'secret';
        const expiresIn = '1h';

        const accessToken = jwt.sign(
            {
                id: user.id,
                username: user.username,
                isAdmin: user.isAdmin,
            },
            secretKey,
            { expiresIn }
        );

        return accessToken;
    }
}

export default UserService;
