"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = () => {
    return (req, res, next) => {
        if (!process.env.SECRET_KEY) {
            return res.status(500).send("Internal Server Error: SECRET_KEY is not defined");
        }
        const check = jsonwebtoken_1.default.verify(req.headers.authorization || "", process.env.SECRET_KEY);
        if (check)
            next();
        else {
            res.json({ message: "Not Authenticated" });
        }
    };
};
exports.verifyToken = verifyToken;
