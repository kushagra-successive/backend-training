import { NextFunction,Request,Response } from "express-serve-static-core";

const asyncController= async (req:Request,res:Response,next:NextFunction)=>{
  try {
    await new Promise((resolve,reject)=>{
      reject(new Error("Promise Rejected"))
    })
  } catch (error:any) {
    error.status=404;
      next(error);
  }

}
export default asyncController;