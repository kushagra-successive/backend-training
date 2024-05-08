const serverSetUp=require("./server");
const connectMongoDB=require("./config/db");
const PORT = process.env.PORT || 4002;

connectMongoDB().then(()=>{
  seedDb();
})