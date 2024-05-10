require("dotenv").config({ path: "./.env" });
const server = require("./server");
const mongodb = require("./config/db");
const seedAdmin=require("./seed");
const PORT = process.env.PORT || 4000;
mongodb()
  .then(() => {
   seedAdmin();//it store the admin data only first time 
    server().listen(PORT, () => console.log("Server listening...", PORT));
  })
  .catch((error) => {
    console.log("Cant Connected", error.message);
  });
