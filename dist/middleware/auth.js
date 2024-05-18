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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (checkAdmin) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            res.status(401).json({ auth: false, msg: 'Please log in' });
            return;
        }
        const user = jsonwebtoken_1.default.verify(token, 'secret');
        console.log('Valid Token', user);
        if (checkAdmin && user.isAdmin !== true) {
            res.status(403).json({ auth: false, msg: 'Permission denied. User is not an admin.' });
            return;
        }
        next();
    }
    catch (err) {
        console.error(err);
        if (err.name === 'TokenExpiredError') {
            res.status(401).json({ auth: false, msg: 'Token expired' });
        }
        else if (err.name === 'JsonWebTokenError') {
            res.status(401).json({ auth: false, msg: 'Invalid token' });
        }
        else {
            res.status(401).json({ auth: false, msg: 'Failed to verify token' });
        }
    }
});
exports.default = validateToken;
