
import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken"
import { secretKey } from "../utils/HelperFunction";

export const verifyToken=()=>{
  return(req: Request, res: Response, next: NextFunction)=>{
    
    const check:any=jwt.verify(req.headers.authorization || "", secretKey);
    if(check) next();
  else{
    res.json({ message: "Not Authenticated" });
  }
  }
}