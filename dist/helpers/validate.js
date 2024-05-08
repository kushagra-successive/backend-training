"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMiddleware = void 0;
const validateRules_1 = __importDefault(require("../validateRules"));
const validateMiddleware = () => {
    return (req, res, next) => {
        const route = req.originalUrl;
        const v = validateRules_1.default[route];
        const { error } = v.validate(req.body);
        if (error) {
            res.status(400).json({ message: error.details[0].message });
        }
        next();
    };
};
exports.validateMiddleware = validateMiddleware;
