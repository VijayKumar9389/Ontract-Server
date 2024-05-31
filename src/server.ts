import express, { Express, Response, Request } from 'express';
import cors from 'cors';
import path from "path";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import validateToken from "./middleware/auth";
import userRoutes from "./routes/user.route";
import projectRoutes from "./routes/project.route";
import packageRoute from "./routes/package.route";
import deliveryRoute from "./routes/delivery.route";
import itemRoutes from "./routes/item.route";
import stakeholderRoutes from "./routes/stakeholder.route";
import tractRecordRoute from "./routes/tract-record.route";
import { PrismaClient } from '@prisma/client';
import {bucketName, s3} from "./middleware/s3";
import {GetObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";

// Initialize Prisma
const prisma = new PrismaClient();

// Load environment variables from .env file
dotenv.config();

// Create a new express application instance
const app: Express = express();
const port: number = parseInt(process.env.PORT || '8080', 10);

// enable cors
app.use(cors({
    origin: [process.env.ORIGIN, process.env.ORIGIN_WWW], // Array of allowed origins
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'accessToken', 'refreshToken'], // Include 'accessToken' header here
    exposedHeaders: ['Authorization'],
}));

// allow express to parse json and x-www-form-urlencoded request bodies
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// define a route handler for the default home page
app.get('/', (req: Request, res: Response): void => {
    res.send('Hello, TypeScript Express!');
});

// route to serve images
app.get('/images/:name', (req: Request, res: Response): void => {
    const { name } = req.params;
    const imagePath: string = path.join(__dirname, `../uploads/${name}`);
    res.sendFile(imagePath);
});

app.get('/api/images/:name', async (req: Request, res: Response,): Promise<void> => {
    const { name } = req.params;

    console.log(name)

    const params = {
        Bucket: bucketName!,
        Key: name,
    };

    try {
        const command = new GetObjectCommand(params);
        const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 }); // URL expires in 1 hour
        res.json({ url: signedUrl });
    } catch (error) {
        console.error('Error generating signed URL:', error);
        res.status(500).json({ error: 'Failed to generate signed URL' });
    }
});

// Route to check Prisma connection
app.get('/check-prisma', async (req: Request, res: Response): Promise<void> => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.status(200).send('Prisma connection is successful!');
    } catch (error) {
        res.status(500).send('Failed to connect to Prisma');
    }
});

// api routes
app.use('/user', userRoutes);
app.use('/project', validateToken(false), projectRoutes);
app.use('/delivery',  validateToken(false), deliveryRoute);
app.use('/package', validateToken(false), packageRoute);
app.use('/item', validateToken(false), itemRoutes);
app.use('/stakeholder', validateToken(false), stakeholderRoutes);
app.use('/tract-record', validateToken(false),  tractRecordRoute);

// start the express server
app.listen(port, (): void => {
    console.log(`Server is running on http://localhost:${port}`);
});
