const Joi = require('joi');
const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];
const userInput = { personalInfo: {
                        streetAddress : '123456789',
                        city : 'webville',
                        state : 'fl'
                    },
                    preferences : arrayString};

// Break down user input into sections, for example, 
// develop a schema for personal info then develop another schema for preferences
const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
});
const preferencesSchema = Joi.array().items(Joi.string());     

// Now combine both the schemas into one
const schema = Joi.object().keys({              
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
});

Joi.validate(userInput, schema, (err,result) => {   
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
//Now try it out again, it should work as expected for both valid and invalid data.