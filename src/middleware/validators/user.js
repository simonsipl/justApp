const Joi = require('@hapi/joi');

const schema = Joi.object({
    email:Joi.string().email(),
    password:Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
});

module.exports = function validateUser(user) {
    const result = schema.validate(user, {allowUnknown:true, convert:true});
    return result.error ? result.error.details : null;
}