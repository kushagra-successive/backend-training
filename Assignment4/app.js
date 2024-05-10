require("dotenv").config({
  path: "../.env",
});
const server = require("./server");
server().listen(4008, () => console.log("Listening"));
