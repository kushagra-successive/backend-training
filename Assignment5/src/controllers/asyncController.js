const createError = require("http-errors");
const promise = async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => {
      reject(new Error("Promise Rejected"));
    });
    res.json({ message: "Resolved" });
  } catch (error) {
    next(createError(500, error.message));
  }
};

module.exports = promise;
