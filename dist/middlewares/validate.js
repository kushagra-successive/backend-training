"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (req, res, next) => {
    const name = String(req.query.name);
    try {
        if (name.length < 4)
            throw new Error("Name must be at least 4 characters long");
    }
    catch (error) {
        error.status = 401;
        next(error);
    }
    next();
};
exports.default = validate;
