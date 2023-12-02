import express, { Router } from 'express';
import UserController from '../controllers/user.controller';

const router: Router = express.Router();
const userController: UserController = new UserController();

// Login
router.post('/login', userController.login);

// Register
router.post('/register', userController.register);

// Refresh Token
router.post('/refresh-token', userController.refreshToken);

export default router;
