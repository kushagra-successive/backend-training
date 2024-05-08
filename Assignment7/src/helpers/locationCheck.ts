import { Request, Response, NextFunction } from "express";
import geoip = require("geoip-lite")

export const locationCheckMiddleware = () => {
  return (req: Request, res: Response, next:NextFunction)=>{
    console.log(req);
    
    const expectedCountryCode :string = "IN";
    const ip:any = req.headers["x-forwarded-for"];
    if (!ip) {
      return res.status(400).send("Unable to determine your location");
    }  
    
    const geo:any = geoip.lookup(ip);
    if (!geo || geo.country !== expectedCountryCode) {
      return res.status(403).send("Access restricted for your region");
    }
    next();
  }
}