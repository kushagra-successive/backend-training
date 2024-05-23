
import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken"

export const verifyToken=()=>{
  return(req: Request, res: Response, next: NextFunction)=>{
    if (!process.env.SECRET_KEY) {
      return res.status(500).send("Internal Server Error: SECRET_KEY is not defined");
    }
    
    const check:any=jwt.verify(req.headers.authorization || "", process.env.SECRET_KEY);
    if(check) next();
  else{
    res.json({ message: "Not Authenticated" });
  }
  }
}