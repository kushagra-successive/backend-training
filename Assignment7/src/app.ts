require("dotenv").config();
import serverSetup from "./server";
const PORT:number=parseInt(process.env.PORT || "3001")
serverSetup().listen(PORT,()=>console.log("Running",PORT)
)