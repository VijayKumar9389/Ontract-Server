import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { CreateUserDTO } from '../dtos/user.dto';
import {User} from "@prisma/client";

class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async login(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;

        try {
            const result = await this.userService.login(username, password);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ error: 'Failed to login' });
        }
    }


    async register(req: Request, res: Response): Promise<void> {
        try {
            const createUserDTO: CreateUserDTO = req.body;

            // Validate the incoming data if needed

            const user: User = await this.userService.register(createUserDTO);
            res.status(201).json(user);
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Failed to register' });
        }
    }

    async refreshToken(req: Request, res: Response): Promise<void> {
        const { refreshToken } = req.body;

        try {
            const result = await this.userService.refreshToken(refreshToken);
            res.status(200).json(result);
        } catch (error) {
            console.error('Error refreshing token:', error);
            res.status(500).json({ error: 'Failed to refresh token' });
        }
    }
}

export default UserController;

