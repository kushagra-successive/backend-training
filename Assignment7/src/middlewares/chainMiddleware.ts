import {Request,Response,NextFunction} from "express";

interface shape{
  middlewares1(req: Request, res: Response, next: NextFunction):void;
  middlewares2(req: Request, res: Response, next: NextFunction):void;
  middlewares3(req: Request, res: Response, next: NextFunction):void;
}
class Chain implements shape{

  middlewares1=(req: Request, res: Response, next: NextFunction)=>{
    console.log("Middle1");
    next();
    
  }
  middlewares2=(req: Request, res: Response, next: NextFunction)=>{
    console.log("Middle2");
    next();
  }
  middlewares3=(req: Request, res: Response, next: NextFunction)=>{
    console.log("Middle3");
    next();
  }
}
export default new Chain();
