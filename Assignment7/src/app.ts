import serverSetup from "./server";
const PORT:number=3001;
serverSetup().listen(PORT,()=>console.log("Running")
)