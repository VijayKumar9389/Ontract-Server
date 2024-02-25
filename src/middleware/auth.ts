import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const validateToken = (checkAdmin: boolean) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.cookies.accessToken;

        if (!token) {
            res.status(401).json({ auth: false, msg: 'Please log in' });
            return;
        }

        const user: any = jwt.verify(token, 'secret');
        console.log('Valid Token', user);

        if (checkAdmin && user.isAdmin !== true) {
            res.status(403).json({ auth: false, msg: 'Permission denied. User is not an admin.' });
            return;
        }

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
