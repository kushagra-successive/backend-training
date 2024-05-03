import { Request, Response } from "express";

const express = require("express");
const app = express();

const sum=(a:number,b:number)=>{
  return a+b;
}
app.get("/", (req: Request, res: Response)=>{

})
console.log(sum(2,3));
// app.listen(3000, () => console.log("listening"));
