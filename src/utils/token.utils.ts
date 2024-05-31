import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

// Generate an access token
export const generateAccessToken = (user: User): string => {
    const expiresIn = '15min';
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        },
        process.env.ACCESS_TOKEN_SECRET as string,
        { expiresIn }
    );
};

// Generate a refresh token
export const generateRefreshToken = (user: User): string => {
    const expiresIn = '8hr';
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin,
        },
        process.env.REFRESH_TOKEN_SECRET as string,
        { expiresIn }
    );
};

// Validate the access token
export const validateAccessToken = (token: string): any => {
    try {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
    } catch (error) {
        throw new Error('Invalid access token');
    }
};

// Validate the refresh token
export const validateRefreshToken = (token: string): any => {
    try {
        return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string);
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
};
