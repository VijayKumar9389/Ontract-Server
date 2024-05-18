import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/user.controller';
import validateToken from "../middleware/auth";

const router: Router = express.Router();
const userController: UserController = new UserController();

// Login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
    await userController.login(req, res);
});

// Register
router.post('/register', validateToken(false), async (req: Request, res: Response): Promise<void> => {
    await userController.register(req, res);
});

//Edit User
router.post('/edit', validateToken(false), async (req: Request, res: Response): Promise<void> => {
    await userController.editUser(req, res);
});

// Get all users
router.get('/getAll', async (req: Request, res: Response): Promise<void> => {
    await userController.getUsers(req, res);
});

// Refresh Token
router.post('/refresh-token', validateToken(false), async (req: Request, res: Response): Promise<void> => {
    await userController.refreshAccessToken(req, res);
});

// Verify Token
router.post('/verify-token', validateToken(false), async (req: Request, res: Response): Promise<void> => {
    await userController.verifySession(req, res);
});

// Example route requiring admin access
router.get('/admin-status', validateToken(false), async (req: Request, res: Response): Promise<void> => {
    await userController.verifyAdminStatus(req, res);
});


export default router;

