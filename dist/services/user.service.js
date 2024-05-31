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
const token_utils_1 = require("../utils/token.utils");
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    // Login a user
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find the user in the database
                const user = yield this.prisma.user.findUnique({
                    where: { username },
                });
                // Check if the user exists
                if (!user) {
                    throw new Error('User does not exist');
                }
                // Check if the password matches
                const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
                // If the password does not match, throw an error
                if (!passwordMatch) {
                    throw new Error('Incorrect password');
                }
                // Generate an access token and a refresh token
                const accessToken = (0, token_utils_1.generateAccessToken)(user);
                const refreshToken = (0, token_utils_1.generateRefreshToken)(user);
                return {
                    auth: true,
                    accessToken: accessToken,
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
                // Hash the password
                const saltRounds = 10;
                const hashedPassword = yield bcrypt_1.default.hash(createUserDTO.password, saltRounds);
                // Create the user in the database
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
                const decodedRefreshToken = (0, token_utils_1.validateRefreshToken)(refreshToken);
                // Extract user information to generate a new access token
                const user = {
                    id: decodedRefreshToken.id,
                    isAdmin: decodedRefreshToken.isAdmin,
                    username: decodedRefreshToken.username,
                    password: '',
                };
                const newAccessToken = (0, token_utils_1.generateAccessToken)(user);
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
}
exports.default = UserService;
