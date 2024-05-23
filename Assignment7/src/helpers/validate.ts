import userSchema from "../validateRules";
import { Request, Response, NextFunction } from "express";

export const validateMiddleware = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const route = req.originalUrl;
  
    const validationSchema = userSchema[route]
  
    const { error } = validationSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
    }
    next();
  }
}