
import { Request, Response, NextFunction } from "express";
interface Shape{
  name: string,
  age: number
} 
export const seededDataMiddleware=()=>{
  return(req: Request, res: Response, next: NextFunction)=>{
    const data : Shape= {
      name: "John",
      age: 30
    };
    req.body = data;
   next();
  }
}