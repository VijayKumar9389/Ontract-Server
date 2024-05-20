// src/utils/tokenUtils.ts

import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

const secretKey = 'secret';

export const generateAccessToken = (user: User): string => {
    const expiresIn = '15min';
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        },
        secretKey,
        { expiresIn }
    );
};

export const generateRefreshToken = (user: User): string => {
    const expiresIn = '8hr';
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        },
        secretKey,
        { expiresIn }
    );
};

export const verifyToken = (token: string): jwt.JwtPayload => {
    return jwt.verify(token, secretKey) as jwt.JwtPayload;
};
