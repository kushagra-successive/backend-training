import { Request, Response, NextFunction } from "express";
import { validateMiddleware } from "../helpers/validate";
import { paramsCheckMiddleware } from "../helpers/paramsCheck";
import { locationCheckMiddleware } from "../helpers/locationCheck";
import {seededDataMiddleware} from "../helpers/seededDataMiddleware";
import { tokenMiddleware } from "../helpers/tokenMiddleware";
import { verifyToken } from "../helpers/verifyToken";

interface shape {
  validate(req: Request, res: Response, next: NextFunction): void;
  paramsCheck(req: Request, res: Response, next: NextFunction): void;
  locationCheck(req: Request, res: Response, next: NextFunction):void;
  seededData(req: Request, res: Response, next: NextFunction):void;
  createToken(req: Request, res: Response, next: NextFunction):void;
  verifyToken(req: Request, res: Response, next: NextFunction):void;
}

class MiddleWare implements shape {
  validate = validateMiddleware();
  paramsCheck = paramsCheckMiddleware();
  locationCheck = locationCheckMiddleware();
  seededData=seededDataMiddleware();
  createToken=tokenMiddleware();
  verifyToken=verifyToken();
}

export default new MiddleWare();
