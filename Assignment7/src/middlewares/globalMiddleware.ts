import { Request, Response, NextFunction } from "express";
interface shape{
  logger(req: Request, res: Response, next: NextFunction):void;
  custom(req: Request, res: Response, next: NextFunction):void;
  counterMiddleware(limit : number):void;
}
class GlobalMiddleware implements shape{
  logger=(req: Request, res: Response, next: NextFunction)=>{
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
  }
  custom=(req: Request, res: Response, next: NextFunction)=>{
    res.setHeader("X-myHeader", "Hii Middlewares");
    console.log(res.getHeaders());
    
    next();
  }
  counterMiddleware = (limit: number) => {
    const counterObj: { count?: number } = {};
    
    return (req: Request, res: Response, next: NextFunction) => {
      counterObj.hasOwnProperty("count") ? null : (counterObj.count = 0);
      
      if (counterObj.count !== undefined && counterObj.count >= limit) {
        res.status(429).json({ error: "Too Many Requests" });
        return;
      } else {
        counterObj.count!++;
      }
  
      console.log(counterObj.count);
      setTimeout(() => {
        delete counterObj.count;
      }, 5000);
  
      next();
    };
  };
}
export default new GlobalMiddleware;

