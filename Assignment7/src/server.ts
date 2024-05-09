
import express,{Request,Response, NextFunction} from "express";
import router from "./routes/UserRouter";
import global from "./middlewares/globalMiddleware"
import healthCheck from "./utils/healthCheck";
const app = express();
const serverSetup=():express.Express=>{
 app.use(express.json());
 app.use(global.logger);
 app.use(global.custom);
 app.use(global.counterMiddleware(3))
 app.use(router)
 app.get('/health', async (req:Request, res:Response) => {
  const response = await healthCheck.checkHealth();
  res.status(response.status).send(response.health);
});

 app.use((err:any, _:Request,res:Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: err.message });
});
  return app;
}

export default serverSetup;