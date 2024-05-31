import {Request, Response} from 'express';
import UserService from '../services/user.service';
import {CreateUserDTO, UserOutputDTO} from '../dtos/user.dto';
import {User} from "@prisma/client";
import jwt, {TokenExpiredError} from "jsonwebtoken";

class UserController {

    private userService: UserService;

    // Initialize the user service
    constructor() {
        this.userService = new UserService();
    }

    // Login User
    async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;

        try {
            const result = await this.userService.login(username, password);
            res.status(200).json({
                auth: true,
                user: result.user,
                accessToken: result.accessToken,
                refreshToken: result.refreshToken
            });
        } catch (error: any) {
            console.error('Error during login:', error);
            res.status(500).json({ error: 'Failed to login' });
        }
    }

    // Get all users
    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users: UserOutputDTO[] = await this.userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error getting users:', error);
            res.status(500).json({ error: 'Failed to get users' });
        }
    }

    // Register User
    async register(req: Request, res: Response): Promise<void> {
        try {
            const createUserDTO: CreateUserDTO = req.body;
            const user: User = await this.userService.register(createUserDTO);
            res.status(201).json(user);
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Failed to register' });
        }
    }

    // Edit a user
    async editUser(req: Request, res: Response): Promise<void> {
        const { id, username, password } = req.body;
        try {
            const user: User = await this.userService.editUser(id, username, password);
            res.status(200).json(user);
        } catch (error) {
            console.error('Error editing user:', error);
            res.status(500).json({ error: 'Failed to edit user' });
        }
    }

    // Refresh the access token
    async refreshAccessToken(req: Request, res: Response): Promise<void> {
        const refreshToken = req.headers.refreshtoken as string | undefined;

        try {
            if (!refreshToken) {
                res.status(401).json({ error: 'No refresh token provided' });
                return;
            }

            const newAccessTokenResponse = await this.userService.refreshAccessToken(refreshToken);
            res.status(200).json(newAccessTokenResponse);
        } catch (error) {
            console.error('Error refreshing access token:', error);

            if (error instanceof TokenExpiredError) {
                res.status(401).json({ error: 'Refresh token expired' });
            } else {
                res.status(500).json({ error: 'Failed to refresh access token' });
            }
        }
    }

    // Verify user session using refresh token
    async verifySession(req: Request, res: Response): Promise<void> {
        const refreshToken = req.headers.refreshtoken as string | undefined;

        try {
            if (!refreshToken) {
                res.status(401).json({ auth: false });
                return;
            }

            const decodedToken = jwt.verify(refreshToken, 'secret') as jwt.JwtPayload;
            const user: UserOutputDTO = {
                id: decodedToken.id as number,
                isAdmin: decodedToken.isAdmin as boolean,
                username: decodedToken.username as string,
            };

            res.json({ auth: true, user: user.username, refreshToken: refreshToken });
        } catch (error) {
            console.error('Error verifying user session:', error);
            if (error instanceof TokenExpiredError) {
                res.status(401).json({ auth: false, error: 'Token expired' });
            } else {
                res.status(500).json({ auth: false, error: 'Failed to verify session' });
            }
        }
    }

    // Verify admin status using refresh token
    async verifyAdminStatus(req: Request, res: Response): Promise<void> {
        const refreshToken = req.headers.refreshtoken as string | undefined;

        try {
            if (!refreshToken) {
                res.status(401).json({ auth: false, error: 'No refresh token provided' });
                return;
            }

            const decodedToken = jwt.verify(refreshToken, 'secret') as jwt.JwtPayload;

            const user: UserOutputDTO = {
                id: decodedToken.id as number,
                isAdmin: decodedToken.isAdmin as boolean,
                username: decodedToken.username as string,
            };

            res.json({ auth: user.isAdmin, user: user.username });
        } catch (error) {
            console.error('Error verifying user session:', error);
            if (error instanceof TokenExpiredError) {
                res.status(401).json({ auth: false, error: 'Token expired' });
            } else {
                res.status(500).json({ auth: false, error: 'Failed to verify session' });
            }
        }
    }
}

export default UserController;

