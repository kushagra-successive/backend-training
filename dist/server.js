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
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const globalMiddleware_1 = __importDefault(require("./middlewares/globalMiddleware"));
const healthCheck_1 = __importDefault(require("./utils/healthCheck"));
const app = (0, express_1.default)();
const serverSetup = () => {
    app.use(express_1.default.json());
    app.use(globalMiddleware_1.default.logger);
    app.use(globalMiddleware_1.default.custom);
    app.use(globalMiddleware_1.default.counterMiddleware(3));
    app.use(UserRouter_1.default);
    app.get('/health', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield healthCheck_1.default.checkHealth();
        res.status(response.status).send(response.health);
    }));
    app.use((err, _, res, next) => {
        res.status(err.status || 500).json({ message: err.message });
    });
    return app;
};
exports.default = serverSetup;
