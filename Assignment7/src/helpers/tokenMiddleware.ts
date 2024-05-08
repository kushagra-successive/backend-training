import express,{Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken"
import { secretKey } from "../utils/HelperFunction";
export const tokenMiddleware=()=>{
  return(req: Request, res: Response, next: NextFunction)=>{
     interface shape{
      name:string,
      email:string
     }
     const payload:shape={
      name: "ShreeRam",
    email: "raghven999@gmail.com",
     }
     req.headers.authorization=jwt.sign(payload, secretKey);     
     next();
  }
}