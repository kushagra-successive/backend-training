"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ControllerClass_1 = __importDefault(require("../controllers/ControllerClass"));
const MiddlewareClass_1 = __importDefault(require("../middlewares/MiddlewareClass"));
const chainMiddleware_1 = __importDefault(require("../middlewares/chainMiddleware"));
const router = express_1.default.Router();
router.get("/list", ControllerClass_1.default.mock);
router.post("/user1", MiddlewareClass_1.default.validate, ControllerClass_1.default.user1);
router.post("/user2", MiddlewareClass_1.default.validate, ControllerClass_1.default.user2);
router.post("/params", MiddlewareClass_1.default.paramsCheck, ControllerClass_1.default.params);
router.get("/location", MiddlewareClass_1.default.locationCheck, ControllerClass_1.default.location);
router.get("/data", MiddlewareClass_1.default.seededData, ControllerClass_1.default.seeded);
router.post("/authentication", MiddlewareClass_1.default.createToken, MiddlewareClass_1.default.verifyToken, ControllerClass_1.default.auth);
router.get("/chain", chainMiddleware_1.default.middlewares1, chainMiddleware_1.default.middlewares2, chainMiddleware_1.default.middlewares3, ControllerClass_1.default.chaining);
exports.default = router;
