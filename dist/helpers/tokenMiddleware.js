"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenMiddleware = () => {
    return (req, res, next) => {
        const payload = {
            name: "ShreeRam",
            email: "raghven999@gmail.com",
        };
        if (!process.env.SECRET_KEY) {
            return res.status(500).send("Internal Server Error: SECRET_KEY is not defined");
        }
        req.headers.authorization = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY);
        next();
    };
};
exports.tokenMiddleware = tokenMiddleware;
