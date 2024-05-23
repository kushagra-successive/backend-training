import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken"
interface shape{
 name:string,
 email:string
}
export const tokenMiddleware=()=>{
  return(req: Request, res: Response, next: NextFunction)=>{
     const payload:shape={
      name: "ShreeRam",
    email: "raghven999@gmail.com",
     }
     if (!process.env.SECRET_KEY) {
      return res.status(500).send("Internal Server Error: SECRET_KEY is not defined");
    }
     
     req.headers.authorization=jwt.sign(payload, process.env.SECRET_KEY);     
     next();
  }
}