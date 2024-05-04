import { Request,Response } from "express";

const validateControl=(req:Request,res:Response)=>{
  res.json({message:`User Authenticated:${req.query.name}`});
};
export default validateControl;