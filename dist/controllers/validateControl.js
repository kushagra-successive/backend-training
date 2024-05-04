"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateControl = (req, res) => {
    res.json({ message: `User Authenticated:${req.query.name}` });
};
exports.default = validateControl;
