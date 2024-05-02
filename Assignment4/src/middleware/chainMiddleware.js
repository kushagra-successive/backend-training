const middleware1 = (req, res, next) => {
  console.log("Middleware 1");
  next();
};

// Second middleware
const middleware2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
};

// Third middleware
const middleware3 = (req, res, next) => {
  console.log("Middleware 3");
  next();
};

module.exports = { middleware1, middleware2, middleware3 };
