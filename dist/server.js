"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const globalMiddleware_1 = __importDefault(require("./middlewares/globalMiddleware"));
const app = (0, express_1.default)();
const serverSetup = () => {
    app.use(express_1.default.json());
    app.use(globalMiddleware_1.default.logger);
    app.use(globalMiddleware_1.default.custom);
    app.use(globalMiddleware_1.default.counterMiddleware(3));
    app.use(UserRouter_1.default);
    app.use((err, _, res, next) => {
        res.status(err.status || 500).json({ message: err.message });
    });
    return app;
};
exports.default = serverSetup;
