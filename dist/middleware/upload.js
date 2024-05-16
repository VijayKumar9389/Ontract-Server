"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Define the upload directory
    },
    filename: (req, file, cb) => {
        const randomName = (0, uuid_1.v4)();
        const fileExtension = file.originalname.split('.').pop();
        cb(null, `${randomName}.${fileExtension}`);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
exports.upload = upload;
