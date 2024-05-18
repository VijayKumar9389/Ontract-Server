"use strict";
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
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    // Login a user
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.prisma.user.findUnique({
                    where: { username },
                });
                if (!user) {
                    throw new Error('User does not exist');
                }
                const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
                if (!passwordMatch) {
                    throw new Error('Incorrect password');
                }
                const token = this.generateAccessToken(user);
                const refreshToken = jsonwebtoken_1.default.sign({ user }, 'secret', { expiresIn: '8hr' });
                console.log(`${user.username} successfully logged in`);
                return {
                    auth: true,
                    accessToken: token,
                    refreshToken: refreshToken,
                    user: user.username,
                };
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    // Get all users
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch all users from the database
                const users = yield this.prisma.user.findMany();
                // Map the Prisma entities to UserOutputDTO, excluding the password
                const usersDTO = users.map(user => ({
                    id: user.id,
                    username: user.username,
                    isAdmin: user.isAdmin,
                }));
                // Return the DTO
                return usersDTO;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    // Register a new user
    register(createUserDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saltRounds = 10;
                const hashedPassword = yield bcrypt_1.default.hash(createUserDTO.password, saltRounds);
                return yield this.prisma.user.create({
                    data: {
                        username: createUserDTO.username,
                        password: hashedPassword,
                    },
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    //Edit a user
    editUser(id, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saltRounds = 10;
                const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
                return yield this.prisma.user.update({
                    where: { id },
                    data: { username, password: hashedPassword },
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    // Add a method to refresh the access token
    refreshAccessToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verify the refresh token
                const decodedRefreshToken = jsonwebtoken_1.default.verify(refreshToken, 'secret');
                // Extract user information
                const user = {
                    id: decodedRefreshToken.id,
                    isAdmin: decodedRefreshToken.isAdmin,
                    username: decodedRefreshToken.username,
                    password: '',
                };
                // Generate a new access token
                const newAccessToken = this.generateAccessToken(user);
                return {
                    auth: true,
                    accessToken: newAccessToken,
                };
            }
            catch (error) {
                throw new Error('Invalid refresh token');
            }
        });
    }
    // Generate an access token
    generateAccessToken(user) {
        const secretKey = 'secret';
        const expiresIn = '15min';
        return jsonwebtoken_1.default.sign({
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        }, secretKey, { expiresIn });
    }
}
exports.default = UserService;
