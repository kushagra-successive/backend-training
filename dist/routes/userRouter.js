"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const asyncController_1 = __importDefault(require("../controllers/asyncController"));
const validate_1 = __importDefault(require("../middlewares/validate"));
const validateControl_1 = __importDefault(require("../controllers/validateControl"));
const router = express_1.default.Router();
router.get("/", (req, res, next) => {
    try {
        throw new Error("Not Router Found");
    }
    catch (error) {
        error.status = 404;
        next(error);
    }
});
router.get("/protect", (req, res, next) => {
    if (!req.body) {
        next((0, http_errors_1.default)(401, "Unauthorized"));
    }
    else {
        res.send(req.body.user);
    }
});
router.get("/teapot", (req, res, next) => {
    next((0, http_errors_1.default)(418, "I'm a teapot"));
});
router.post("/data", (req, res, next) => {
    if (!req.body || !req.body.name) {
        const err = new Error("Bad Request: Missing name field");
        err.status = 400;
        next(err);
    }
});
router.post("/async", asyncController_1.default);
router.post("/validate", validate_1.default, validateControl_1.default);
exports.default = router;
