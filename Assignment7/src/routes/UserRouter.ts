import express from "express";
import controller from "../controllers/ControllerClass";
import middleware from "../middlewares/MiddlewareClass";
import chain from "../middlewares/chainMiddleware";
const router=express.Router();
router.get("/list",controller.mock);
router.post("/user1",middleware.validate,controller.user1);
router.post("/user2",middleware.validate,controller.user2);
router.post("/params",middleware.paramsCheck,controller.params);
router.get("/location",middleware.locationCheck,controller.location);
router.get("/data",middleware.seededData,controller.seeded);
router.post("/authentication",middleware.createToken,middleware.verifyToken,controller.auth)
router.get("/chain", chain.middlewares1,chain.middlewares2,chain.middlewares3, controller.chaining);
export default router;