"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chain {
    constructor() {
        this.middlewares1 = (req, res, next) => {
            console.log("Middle1");
            next();
        };
        this.middlewares2 = (req, res, next) => {
            console.log("Middle2");
            next();
        };
        this.middlewares3 = (req, res, next) => {
            console.log("Middle3");
            next();
        };
    }
}
exports.default = new Chain();
