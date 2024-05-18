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
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_1 = __importDefault(require("../middleware/auth"));
const router = express_1.default.Router();
const userController = new user_controller_1.default();
// Login
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.login(req, res);
}));
// Register
router.post('/register', (0, auth_1.default)(false), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.register(req, res);
}));
//Edit User
router.post('/edit', (0, auth_1.default)(false), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.editUser(req, res);
}));
// Get all users
router.get('/getAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.getUsers(req, res);
}));
// Refresh Token
router.post('/refresh-token', (0, auth_1.default)(false), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.refreshAccessToken(req, res);
}));
// Verify Token
router.post('/verify-token', (0, auth_1.default)(false), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.verifySession(req, res);
}));
// Example route requiring admin access
router.get('/admin-status', (0, auth_1.default)(false), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield userController.verifyAdminStatus(req, res);
}));
exports.default = router;
