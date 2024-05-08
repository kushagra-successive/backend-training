"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seededDataMiddleware = void 0;
const seededDataMiddleware = () => {
    return (req, res, next) => {
        let data = {
            name: "John",
            age: 30
        };
        req.body = data;
        next();
    };
};
exports.seededDataMiddleware = seededDataMiddleware;
