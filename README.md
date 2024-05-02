## Description

1. Create a thorough document, named errors.md, provide a detailed description of all error codes.

2. Setup error handling middleware

   1. Setup middleware using app.use() method

      const express = require('express');

      const createError = require('http-errors');

      const app = express();

   // Other middleware and routes

   // Error handling middleware

   app.use((req, res, next) => {

   next(createError(404, 'Not Found'));

   });

   // Additional error handling middleware (if needed)

   // Start server

   const port = process.env.PORT || 3000;

   app.listen(port, () => {

   console.log(`Server is running on port ${port}`);

});

3. Incorporate the error handling middleware with the previously developed API.

4. Create scenarios that generate all possible error codes.

5. Create an asynchronous route that intentionally throws an error.Implement error handling for asynchronous errors within the route.Send an appropriate response to the client, indicating the error.

6. Create a route that expects certain parameters in the request. Implement validation checks and throw a validation error if the checks fail. Handle validation errors gracefully and send a JSON response with error details.
