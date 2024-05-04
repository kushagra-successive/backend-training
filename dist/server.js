"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const app = (0, express_1.default)();
const serverSetup = () => {
    app.use(userRouter_1.default);
    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({ message: err.message });
    });
    return app;
};
exports.default = serverSetup;
