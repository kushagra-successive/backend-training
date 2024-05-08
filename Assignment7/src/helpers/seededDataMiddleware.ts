
import { Request, Response, NextFunction } from "express";

export const seededDataMiddleware=()=>{
  return(req: Request, res: Response, next: NextFunction)=>{
    let data: {name: string;age: number} = {
      name: "John",
      age: 30
    };
    req.body = data;
   next();
  }
}