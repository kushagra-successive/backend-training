import { Request, Response, NextFunction } from "express";

export const paramsCheckMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { id }: any = req.query;
    if (!isNaN(id)) {
      next();
    } else {
      const err: any = new Error("Bad Request: NaN");
      err.status = 400;
      console.log("midd", err.status, err.message);
      next(err);
    }
  }
}