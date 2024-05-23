import { Request,Response,NextFunction } from "express";

const validate=(req:Request,res:Response,next:NextFunction)=>{
   const name :string = String(req.query.name);
   try {
    if(name.length<4)
    throw new Error("Name must be at least 4 characters long")
   } catch (error:any) {
      error.status=401;
      next(error);
   }
   next();
}
export default validate;