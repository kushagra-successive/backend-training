"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("../helpers/validate");
const paramsCheck_1 = require("../helpers/paramsCheck");
const locationCheck_1 = require("../helpers/locationCheck");
const seededDataMiddleware_1 = require("../helpers/seededDataMiddleware");
const tokenMiddleware_1 = require("../helpers/tokenMiddleware");
const verifyToken_1 = require("../helpers/verifyToken");
class MiddleWare {
    constructor() {
        this.validate = (0, validate_1.validateMiddleware)();
        this.paramsCheck = (0, paramsCheck_1.paramsCheckMiddleware)();
        this.locationCheck = (0, locationCheck_1.locationCheckMiddleware)();
        this.seededData = (0, seededDataMiddleware_1.seededDataMiddleware)();
        this.createToken = (0, tokenMiddleware_1.tokenMiddleware)();
        this.verifyToken = (0, verifyToken_1.verifyToken)();
    }
}
exports.default = new MiddleWare();
