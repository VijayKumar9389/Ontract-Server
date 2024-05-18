"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
class UserController {
    constructor() {
        this.userService = new user_service_1.default();
    }
    // Login User
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            // Log the request body to inspect its structure
            try {
                // Call the login method from the user service
                const result = yield this.userService.login(username, password);
                const isProduction = process.env.NODE_ENV === 'production';
                console.log('isProduction:', isProduction);
                // Set HTTP-only cookies
                res.cookie('accessToken', result.accessToken, {
                    httpOnly: true,
                    secure: isProduction /* set to true in production */,
                    sameSite: 'strict',
                    domain: isProduction ? '.amplifyapp.com' : 'localhost',
                });
                // Set HTTP-only cookies
                res.cookie('refreshToken', result.refreshToken, {
                    httpOnly: true,
                    secure: isProduction /* set to true in production */,
                    sameSite: 'strict',
                    domain: isProduction ? '.amplifyapp.com' : 'localhost',
                });
                res.status(200).json({ auth: true, user: result.user });
            }
            catch (error) {
                console.error('Error during login:', error);
                res.status(500).json({ error: 'Failed to login' });
            }
        });
    }
    //Get all users
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getUsers();
                res.status(200).json(users);
            }
            catch (error) {
                console.error('Error getting users:', error);
                res.status(500).json({ error: 'Failed to get users' });
            }
        });
    }
    // Register User
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createUserDTO = req.body;
                const user = yield this.userService.register(createUserDTO);
                res.status(201).json(user);
            }
            catch (error) {
                console.error('Error during registration:', error);
                res.status(500).json({ error: 'Failed to register' });
            }
        });
    }
    // Edit a user
    editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, username, password } = req.body;
            try {
                const user = yield this.userService.editUser(id, username, password);
                res.status(200).json(user);
            }
            catch (error) {
                console.error('Error editing user:', error);
                res.status(500).json({ error: 'Failed to edit user' });
            }
        });
    }
    // Method to refresh the access token
    refreshAccessToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = req.cookies.refreshToken;
            try {
                if (!refreshToken) {
                    res.status(401).json({ error: 'No refresh token provided' });
                    return;
                }
                // Verify the refresh token
                jsonwebtoken_1.default.verify(refreshToken, 'secret');
                // If verification is successful, refresh the access token
                const result = yield this.userService.refreshAccessToken(refreshToken);
                // Set the new access token in cookies
                res.cookie('accessToken', result.accessToken, {
                    httpOnly: true,
                    secure: false /* set to true in production */,
                    sameSite: 'strict',
                    domain: 'localhost',
                });
                // Return the new access token and other details
                res.status(200).json(result);
            }
            catch (error) {
                // Handle token verification failure
                console.error('Error refreshing access token:', error);
                if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                    // Token has expired
                    res.status(401).json({ error: 'Refresh token expired' });
                }
                else {
                    // Other verification errors
                    res.status(500).json({ error: 'Failed to refresh access token' });
                }
            }
        });
    }
    // Method to verify user session using refresh token
    verifySession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = req.cookies.refreshToken;
            try {
                if (!refreshToken) {
                    res.status(401).json({ auth: false });
                    return;
                }
                // Verify the refresh token
                const decodedToken = jsonwebtoken_1.default.verify(refreshToken, 'secret');
                const user = {
                    id: decodedToken.user.id,
                    isAdmin: decodedToken.user.isAdmin,
                    username: decodedToken.user.username,
                };
                // If verification is successful, return authentication success
                res.json({ auth: true, user: user.username });
            }
            catch (error) {
                // Handle token verification failure
                console.error('Error verifying user session:', error);
                // If the token has expired, return a 401 status code
                if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                    // Token has expired
                    res.status(401).json({ auth: false, error: 'Token expired' });
                }
                else {
                    // Other verification errors
                    res.status(500).json({ auth: false, error: 'Failed to verify session' });
                }
            }
        });
    }
    verifyAdminStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = req.cookies.refreshToken;
            try {
                if (!refreshToken) {
                    res.status(401).json({ auth: false });
                    return;
                }
                // Verify the refresh token
                const decodedToken = jsonwebtoken_1.default.verify(refreshToken, 'secret');
                const user = {
                    id: decodedToken.user.id,
                    isAdmin: decodedToken.user.isAdmin,
                    username: decodedToken.user.username,
                };
                // If verification is successful, return authentication success along with isAdmin status
                res.json({ auth: true, isAdmin: user.isAdmin });
            }
            catch (error) {
                // Handle token verification failure
                console.error('Error verifying user session:', error);
                // If the token has expired, return a 401 status code
                if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                    // Token has expired
                    res.status(401).json({ auth: false, error: 'Token expired' });
                }
                else {
                    // Other verification errors
                    res.status(500).json({ auth: false, error: 'Failed to verify session' });
                }
            }
        });
    }
}
exports.default = UserController;
