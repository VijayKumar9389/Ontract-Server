"use strict";
// src/utils/tokenUtils.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = 'secret';
const generateAccessToken = (user) => {
    const expiresIn = '15min';
    return jsonwebtoken_1.default.sign({
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin,
    }, secretKey, { expiresIn });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    const expiresIn = '8hr';
    return jsonwebtoken_1.default.sign({
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin,
    }, secretKey, { expiresIn });
};
exports.generateRefreshToken = generateRefreshToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, secretKey);
};
exports.verifyToken = verifyToken;
