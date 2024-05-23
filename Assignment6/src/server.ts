import express,{Request,Response,NextFunction} from "express";
import router from "./routes/userRouter"
const app = express();

const serverSetup=():express.Express=>{
  app.use(router);
  app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
    res.status(err.status || 500).json({ message: err.message });
  })
  return app;
}
export default serverSetup;