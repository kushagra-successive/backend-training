"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HelperFunction_1 = require("../utils/HelperFunction");
const verifyToken = () => {
    return (req, res, next) => {
        const check = jsonwebtoken_1.default.verify(req.headers.authorization || "", HelperFunction_1.secretKey);
        if (check)
            next();
        else {
            res.json({ message: "Not Authenticated" });
        }
    };
};
exports.verifyToken = verifyToken;
