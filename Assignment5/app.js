const express = require("express");
const app = express();
app.use(express.json());
const { validate } = require("./src/middleware/index");
// // Internal Server Error (500): When an unexpected error occurs within the server.
// app.get("/", (req, res, next) => {
//   try {
//     throw new Error("Not Found");
//   } catch (err) {
//     next(err);
//   }
// });
// // Route Not Found (404): When a request is made to a route that does not exist.
// app.use((req, res, next) => {
//   next(createError(404, "Route Not Found"));
// });
// // Unauthorized (401): When a request requires authentication credentials that are missing or incorrect.
// app.post("/protected-route", (req, res, next) => {
//   if (!req.user) {
//     next(createError(401, "Unauthorized"));
//   } else {
//     res.send(req.body.user);
//   }
// });
// // Bad Request (400): When the server cannot process the request due to invalid syntax.
// app.post("/api/resource", (req, res, next) => {
//   if (!req.body.name) {
//     next(createError(400, "Bad Request: Name is required"));
//   } else {
//     res.send(req.body.name);
//   }
// });
//Error to be handled
// app.get("/async", async (req, res) => {
//   try {
//     await new Promise((resolve, reject) => {
//       reject(new Error("Promise Rejected"));
//     });
//   } catch (error) {
//     res.status(error.status).json({ message: error.message });
//   }
//   res.json({ message: "Resolved" });
// });

app.post("/validate", validate, (req, res) => {
  res.send(req.query.name);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
