"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsCheckMiddleware = void 0;
const paramsCheckMiddleware = () => {
    return (req, res, next) => {
        const { id } = req.query;
        if (!isNaN(id)) {
            next();
        }
        else {
            const err = new Error("Bad Request: NaN");
            err.status = 400;
            console.log("midd", err.status, err.message);
            next(err);
        }
    };
};
exports.paramsCheckMiddleware = paramsCheckMiddleware;
