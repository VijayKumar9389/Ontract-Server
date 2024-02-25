import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/user.controller';

const router: Router = express.Router();
const userController: UserController = new UserController();

// Login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
    await userController.login(req, res);
});

// Register
router.post('/register', async (req: Request, res: Response): Promise<void> => {
    await userController.register(req, res);
});

// Get all users
router.get('/getAll', async (req: Request, res: Response): Promise<void> => {
    await userController.getUsers(req, res);
});

// Refresh Token
router.post('/refresh-token', async (req: Request, res: Response): Promise<void> => {
    await userController.refreshAccessToken(req, res);
});

router.post('/verify-token', async (req: Request, res: Response): Promise<void> => {
    await userController.verifySession(req, res);
});


export default router;

