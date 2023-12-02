import express, { Express, Response, Request } from 'express';
import cors from 'cors';
import path from "path";

import userRoutes from "./routes/user.route";
import projectRoutes from "./routes/project.route";
import deliveryRoute from "./routes/delivery.route";
import itemRoutes from "./routes/item.route";
import stakeholderRoutes from "./routes/stakeholder.route";
import tractRecordRoute from "./routes/tract-record.route";

// Create a new express application instance
const app: Express = express();
const port: number = 3005;

// enable cors
app.use(cors());

// allow express to parse json and x-www-form-urlencoded request bodies
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get('/', (req: Request, res: Response): void => {
    res.send('Hello, TypeScript Express!');
});

app.get('/images/:name', (req: Request, res: Response): void => {
    const { name } = req.params;
    const imagePath: string = path.join(__dirname, `../uploads/${name}`);
    res.sendFile(imagePath);
});

app.use('/user', userRoutes);
app.use('/project', projectRoutes);
app.use('/delivery', deliveryRoute);
app.use('/item', itemRoutes);
app.use('/stakeholder', stakeholderRoutes);
app.use('/tract-record', tractRecordRoute);

app.listen(port, (): void => {
    console.log(`Server is running on http://localhost:${port}`);
});
