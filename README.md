## Description

1. Setup Validation middleware

   1. Install joi package using npm - npm install joi

   2. Include joi in your express file -

      1. const Joi = require('joi');

2. Apply joi in your code, sample code as below -

   1. // Example validation schema

      const userSchema = Joi.object({

      username: Joi.string().alphanum().min(3).max(30).required(),

      email: Joi.string().email().required(),

      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

});

2. Incorporate the validation middleware with the previously developed API.

3. Create a thorough document, named validations.md, elucidating the importance of validations in security.

4. Write a middleware function to validate user input for a registration form. Check if the required fields are present and if they meet certain criteria (e.g., password strength, email format).

5. Create middleware to validate that specific query parameters in a route are numeric. If a non-numeric value is provided, respond with an appropriate error message.

6. Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.

7. User Build a validation middleware that dynamically fetches validation rules from a configuration file. The rules should be applied based on the route being accessed.
