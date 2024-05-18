import {Request, Response} from 'express';
import UserService from '../services/user.service';
import {CreateUserDTO, UserOutputDTO} from '../dtos/user.dto';
import {User} from "@prisma/client";
import jwt, {TokenExpiredError} from "jsonwebtoken";

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    // Login User
    async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;

        // Log the request body to inspect its structure
        try {
            // Call the login method from the user service
            const result = await this.userService.login(username, password);

            const isProduction: boolean = process.env.NODE_ENV === 'production';
            console.log('isProduction:', isProduction);

            // Set HTTP-only cookies
            res.cookie('accessToken', result.accessToken, {
                httpOnly: true,
                secure: isProduction /* set to true in production */,
                sameSite: 'strict',
                domain: isProduction ? '.amplifyapp.com' : 'localhost',
                path: '/',
            });

            // Set HTTP-only cookies
            res.cookie('refreshToken', result.refreshToken, {
                httpOnly: true,
                secure: isProduction /* set to true in production */,
                sameSite: 'strict',
                domain: isProduction ? '.amplifyapp.com' : 'localhost',
                path: '/',
            });

            res.status(200).json({ auth: true, user: result.user });
        } catch (error: any) {
            console.error('Error during login:', error);
            res.status(500).json({ error: 'Failed to login' });
        }
    }

    //Get all users
    async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const users: UserOutputDTO[] = await this.userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error getting users:', error);
            res.status(500).json({error: 'Failed to get users'});
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
            res.status(500).json({error: 'Failed to register'});
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
            res.status(500).json({error: 'Failed to edit user'});
        }
    }

    // Method to refresh the access token
    async refreshAccessToken(req: Request, res: Response): Promise<void> {
        const refreshToken = req.cookies.refreshToken;
        try {
            if (!refreshToken) {
                res.status(401).json({ error: 'No refresh token provided' });
                return;
            }

            // Verify the refresh token
            jwt.verify(refreshToken, 'secret');

            // If verification is successful, refresh the access token
            const result = await this.userService.refreshAccessToken(refreshToken);

            // Set the new access token in cookies
            res.cookie('accessToken', result.accessToken, {
                httpOnly: true,
                secure: false /* set to true in production */,
                sameSite: 'strict',
                domain: 'localhost',
            });

            // Return the new access token and other details
            res.status(200).json(result);
        } catch (error) {
            // Handle token verification failure
            console.error('Error refreshing access token:', error);

            if (error instanceof TokenExpiredError) {
                // Token has expired
                res.status(401).json({ error: 'Refresh token expired' });
            } else {
                // Other verification errors
                res.status(500).json({ error: 'Failed to refresh access token' });
            }
        }
    }

    // Method to verify user session using refresh token
    async verifySession(req: Request, res: Response): Promise<void> {
        const refreshToken = req.cookies.refreshToken;
        try {
            if (!refreshToken) {
                res.status(401).json({ auth: false });
                return;
            }

            // Verify the refresh token
            const decodedToken = jwt.verify(refreshToken, 'secret') as jwt.JwtPayload;
            const user: UserOutputDTO = {
                id: decodedToken.user.id as number,
                isAdmin: decodedToken.user.isAdmin as boolean,
                username: decodedToken.user.username as string,
            };

            // If verification is successful, return authentication success
            res.json({ auth: true, user: user.username });
        } catch (error) {
            // Handle token verification failure
            console.error('Error verifying user session:', error);
            // If the token has expired, return a 401 status code
            if (error instanceof TokenExpiredError) {
                // Token has expired
                res.status(401).json({ auth: false, error: 'Token expired' });
            } else {
                // Other verification errors
                res.status(500).json({ auth: false, error: 'Failed to verify session' });
            }
        }
    }

    async verifyAdminStatus(req: Request, res: Response): Promise<void> {
        const refreshToken = req.cookies.refreshToken;
        try {
            if (!refreshToken) {
                res.status(401).json({ auth: false });
                return;
            }

            // Verify the refresh token
            const decodedToken = jwt.verify(refreshToken, 'secret') as jwt.JwtPayload;
            const user: UserOutputDTO = {
                id: decodedToken.user.id as number,
                isAdmin: decodedToken.user.isAdmin as boolean,
                username: decodedToken.user.username as string,
            };

            // If verification is successful, return authentication success along with isAdmin status
            res.json({ auth: true, isAdmin: user.isAdmin });
        } catch (error) {
            // Handle token verification failure
            console.error('Error verifying user session:', error);
            // If the token has expired, return a 401 status code
            if (error instanceof TokenExpiredError) {
                // Token has expired
                res.status(401).json({ auth: false, error: 'Token expired' });
            } else {
                // Other verification errors
                res.status(500).json({ auth: false, error: 'Failed to verify session' });
            }
        }
    }
}

export default UserController;

