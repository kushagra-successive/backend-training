const mongoDB = require("./config/server");
const serverSetup = require("./server");
mongoDB()
  .then(() => {
    serverSetup().listen(3000, () => console.log(`listening at 3000`));
  })
  .catch((err) => console.log(err.message));
