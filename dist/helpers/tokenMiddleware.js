"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HelperFunction_1 = require("../utils/HelperFunction");
const tokenMiddleware = () => {
    return (req, res, next) => {
        const payload = {
            name: "ShreeRam",
            email: "raghven999@gmail.com",
        };
        req.headers.authorization = jsonwebtoken_1.default.sign(payload, HelperFunction_1.secretKey);
        next();
    };
};
exports.tokenMiddleware = tokenMiddleware;
