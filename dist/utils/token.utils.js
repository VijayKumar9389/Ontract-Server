"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRefreshToken = exports.validateAccessToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Generate an access token
const generateAccessToken = (user) => {
    const expiresIn = '15min';
    return jsonwebtoken_1.default.sign({
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin,
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn });
};
exports.generateAccessToken = generateAccessToken;
// Generate a refresh token
const generateRefreshToken = (user) => {
    const expiresIn = '8hr';
    return jsonwebtoken_1.default.sign({
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin,
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn });
};
exports.generateRefreshToken = generateRefreshToken;
// Validate the access token
const validateAccessToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET);
    }
    catch (error) {
        throw new Error('Invalid access token');
    }
};
exports.validateAccessToken = validateAccessToken;
// Validate the refresh token
const validateRefreshToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_SECRET);
    }
    catch (error) {
        throw new Error('Invalid refresh token');
    }
};
exports.validateRefreshToken = validateRefreshToken;
