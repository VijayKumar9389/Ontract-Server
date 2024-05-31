import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { validateAccessToken } from "../utils/token.utils";

const validateToken = (checkAdmin: boolean) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.headers['accesstoken'] as string;

        if (!token) {
            res.status(401).json({ auth: false, msg: 'Please log in' });
            return;
        }

        const user = validateAccessToken(token) as JwtPayload;
        console.log('Valid Token', user);

        if (checkAdmin && user.isAdmin !== true) {
            res.status(403).json({ auth: false, msg: 'Permission denied. User is not an admin.' });
            return;
        }

        // Attach user info to the request object for further middleware use
        (req as any).user = user;

        next();
    } catch (err: any) {
        console.error(err);
        if (err.name === 'TokenExpiredError') {
            res.status(401).json({ auth: false, msg: 'Token expired' });
        } else if (err.name === 'JsonWebTokenError') {
            res.status(401).json({ auth: false, msg: 'Invalid token' });
        } else {
            res.status(401).json({ auth: false, msg: 'Failed to verify token' });
        }
    }
};

export default validateToken;
