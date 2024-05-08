"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HelperFunction_1 = __importDefault(require("../utils/HelperFunction"));
class Controller {
    constructor() {
        this.mock = (req, res) => {
            res.json(HelperFunction_1.default);
        };
        this.validate = (req, res) => {
            res.json({ message: "Authenticated", data: req.body });
        };
    }
}
exports.default = new Controller();
