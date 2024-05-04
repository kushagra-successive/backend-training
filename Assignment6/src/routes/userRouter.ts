import express, { Request, Response, NextFunction } from "express";
import createError from 'http-errors';
import promise from "../controllers/promise";
import validate from "../middlewares/validate";
import validateControl from "../controllers/validateControl";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction): void => {
    try {
        throw new Error("Not Router Found");
    } catch (error: any) {
        error.status = 404;
        next(error);
    }
});

router.get("/protect", (req: Request, res: Response, next: NextFunction): void => {
    if (!req.body) {
        next(createError(401, "Unauthorized"));
    } else {
        res.send(req.body.user);
    }
});

router.get("/teapot", (req: Request, res: Response, next: NextFunction): void => {
    next(createError(418, "I'm a teapot"));
});

router.post("/data", (req: Request, res: Response, next: NextFunction): void => {
    if (!req.body || !req.body.name) {
        const err: any = new Error("Bad Request: Missing name field");
        err.status = 400;
        next(err);
    } else {
        // Process valid data
    }
});

router.post("/async", promise);

router.post("/validate", validate, validateControl);

export default router;
