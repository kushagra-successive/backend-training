require("dotenv").config({ path: "../.env" });
const server = require("./server");
const PORT = process.env.PORT || 4004;
console.log(PORT);
server().listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
