const Joi = require('joi')

//Define schema
const creatorData = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    projectsArray: Joi.array().items(Joi.string()).required(),
});

const creatorSchema = {
    user_name: "XanaBuilsCoolStuff",
    email: "xanag@gmail.com",
    projects: [],
    interests: ["Medical technology", "Aerospace", "Archimedes", "Percy Jackson", "Exercise", "Roleplaying games"],
    join_date: "03/17/24"
}


//This makes sure a user's data is validated against the given schema.This includes missing fields, or incorrect types of data, etc.
const validationResult = userSchema.validate(creatorData);

if (validationResult.error) {
    console.error('Validation error:', validationResult.error.details);
} else{
    console.log('Creator data is valid:', validationResult.value)
}

//Questions:
/*How do I create a user schema each time a user creates an account?
How do I link the frontend with the backend? */