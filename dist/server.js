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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = __importDefault(require("./middleware/auth"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const project_route_1 = __importDefault(require("./routes/project.route"));
const package_route_1 = __importDefault(require("./routes/package.route"));
const delivery_route_1 = __importDefault(require("./routes/delivery.route"));
const item_route_1 = __importDefault(require("./routes/item.route"));
const stakeholder_route_1 = __importDefault(require("./routes/stakeholder.route"));
const tract_record_route_1 = __importDefault(require("./routes/tract-record.route"));
const s3_1 = require("./middleware/s3");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
// Load environment variables from .env file
dotenv_1.default.config();
// Create a new express application instance
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '8080', 10);
// enable cors
app.use((0, cors_1.default)({
    origin: [process.env.ORIGIN, process.env.ORIGIN_WWW],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'accessToken', 'refreshToken'], // Include 'accessToken' header here
}));
// allow express to parse json and x-www-form-urlencoded request bodies
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
// define a route handler for the images endpoint
app.get('/api/images/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.params;
    // Determine the environment
    const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
    // Create a key with the environment folder
    const key = `${environment}/${name}`;
    const params = {
        Bucket: s3_1.bucketName,
        Key: key,
    };
    try {
        const command = new client_s3_1.GetObjectCommand(params);
        const signedUrl = yield (0, s3_request_presigner_1.getSignedUrl)(s3_1.s3, command, { expiresIn: 3600 }); // URL expires in 1 hour
        res.json({ url: signedUrl });
    }
    catch (error) {
        console.error('Error generating signed URL:', error);
        res.status(500).json({ error: 'Failed to generate signed URL' });
    }
}));
// api routes
app.use('/user', user_route_1.default);
app.use('/project', (0, auth_1.default)(false), project_route_1.default);
app.use('/delivery', (0, auth_1.default)(false), delivery_route_1.default);
app.use('/package', (0, auth_1.default)(false), package_route_1.default);
app.use('/item', (0, auth_1.default)(false), item_route_1.default);
app.use('/stakeholder', (0, auth_1.default)(false), stakeholder_route_1.default);
app.use('/tract-record', (0, auth_1.default)(false), tract_record_route_1.default);
// start the express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
