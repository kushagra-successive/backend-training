"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateRules_1 = __importDefault(require("../validateRules"));
class MiddleWare {
    constructor() {
        this.validate = (req, res, next) => {
            const { error } = validateRules_1.default.validate(req.body);
            if (error) {
                res.status(400).json({ message: error.details[0].message });
            }
            next();
        };
    }
}
const validateMiddleware = new MiddleWare();
exports.default = validateMiddleware.validate;
