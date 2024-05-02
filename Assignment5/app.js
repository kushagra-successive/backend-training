const server = require("./server");
const port = process.env.PORT || 4004;

server().listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
