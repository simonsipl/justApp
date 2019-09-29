const mapValues = require('lodash.mapvalues');
const responses = require('../responses/user');

const wrapWithTryCatch = fn => (req,res,next) => Promise.resolve(fn(req,res,next)).catch(next);

function withErrorHandling(api) {
    return mapValues(api, wrapWithTryCatch);
}

module.exports = ({userService, userRepository}) => withErrorHandling ({
    async register(req,res, next) {
        const user = req.body;

        await userService.register(user);

        responses.register(req.body.email, res);
    }
})