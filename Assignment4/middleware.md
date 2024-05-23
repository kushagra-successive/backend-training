## Middlewares
Middlewares are functions that have access to the request and response objects in an Express.js application's request-response cycle. They are essentially the building blocks of Express.js applications, allowing developers to execute code, perform tasks, modify request and response objects, and terminate the request-response cycle by sending a response or passing control to the next middleware function.

Here's how middlewares work and their common usage:

1. Execution Flow: Middlewares are executed sequentially in the order they are added to the application. When a request is made to the server, each middleware in the chain gets an opportunity to process the request and optionally modify the request or response objects.
2. Access to Request and Response Objects: Middlewares have access to the request (req) and response (res) objects, which allows them to read data from the request, modify it, or send a response back to the client.
3. Next Function: Middlewares have access to a next function, which is a callback that passes control to the next middleware function in the chain. It's important to call next() within a middleware function to pass control to the next middleware in the stack. If next() is not called, the request-response cycle will be left hanging, and the client's request will not be processed further.
4. Error Handling: Middlewares can also handle errors. If an error occurs during the request-response cycle, Express.js will pass the error to the next middleware with four parameters (err, req, res, next). Error-handling middleware functions are defined with four parameters, the first being the error object.

Common usages of middlewares include:

Logging: Middleware functions can log information about each request, such as the request method, URL, and timestamp, for debugging or analytics purposes.
Authentication and Authorization: Middlewares can authenticate users by checking authentication tokens or credentials included in the request headers. They can also authorize users by verifying their permissions to access certain resources.
Parsing Request Body: Middlewares like body-parser are used to parse incoming request bodies in different formats (e.g., JSON, URL-encoded) and make the parsed data available in req.body.
Handling CORS: Middlewares can handle Cross-Origin Resource Sharing (CORS) by setting appropriate HTTP headers to allow or restrict access to resources from different origins.
Error Handling: Middleware functions can handle errors that occur during the request-response cycle and send appropriate error responses back to the client.