const Joi = require('joi');
const qs = require('querystring');

function validateSchema(req, next, schema) {

    const { error, value } = schema.validate(req.body);
    if (error) {
        next(`Validation error: ${error.details.map(a => a.message).join()}`);
    } else {
        req.body = value;
        next();
    }
}

function authSchema(req,res,next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateSchema(req, next, schema);
}

function registerSchema(req, res, next) {


    const schema = Joi.object({
        firstName: Joi.string().required().max(40),
        lastName: Joi.string().max(40).required(),
        username: Joi.string().required().min(3).max(32),
        password: Joi.string().min(6).required(),
        userType: Joi.number().min(0).max(2).required()
    });
    validateSchema(req, next, schema);

}

module.exports = { validateSchema, registerSchema, authSchema };