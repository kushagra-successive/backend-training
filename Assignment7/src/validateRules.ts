import Joi from "joi";

interface UserSchema {
  [key: string]: Joi.ObjectSchema;
}

const userSchema: UserSchema = {
  "/user1": Joi.object({

    username: Joi.string().alphanum().min(3).max(30).required(),
  
    email: Joi.string().email().required(),
  
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  
  }),
  "/user2":Joi.object({

    email: Joi.string().email().required(),
  
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  
  }),
}
export default userSchema;