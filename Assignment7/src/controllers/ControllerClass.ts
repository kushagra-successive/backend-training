import {Request,Response,NextFunction} from "express";
import {mockList,secretKey} from "../utils/HelperFunction";
interface shape{
  mock(req: Request, res: Response): void;
  user1(req: Request, res: Response):void;
  user2(req: Request, res: Response):void;
  params(req: Request, res: Response):void;
  location(req: Request, res: Response):void;
  seeded(req:Request,res:Response):void;
  chaining(req:Request,res:Response):void;
}
class Controller implements shape{
  mock=(req:Request,res:Response)=>{
    res.json(mockList);
  }
  user1=(req:Request,res:Response)=>{
    res.json({message:"Authenticated User1",data:req.body})
  }
  user2=(req:Request,res:Response)=>{
    res.json({message:"Authenticated User2",data:req.body})
  }
  params=(req:Request,res:Response)=>{
    res.json({message:"Parameters",data:req.query})
  }
  location=(req:Request,res:Response)=>{
    res.json({message:"Accessed"})
  }
  seeded=(req:Request,res:Response)=>{
    res.json(req.body)
  }
  auth=(req:Request,res:Response)=>{
    res.header({token:req.headers.authorization}).json({message:"Token Verified"})
  }
  chaining=(req:Request,res:Response)=>{
    res.json({message:"Hello"})
  }
}
export default new Controller()

