const mapValues = require('lodash.mapvalues');
const bcrypt = require('bcryptjs');
const responses = require('../responses/user');

const wrapWithTryCatch = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

function withErrorHandling(api) {
    return mapValues(api, wrapWithTryCatch);
}

module.exports = ({ userService, userRepository }) => withErrorHandling({
    async register(req, res, next) {
        const user = req.body;

        await userService.register(user);

        responses.register(req.body.email, res);
    },
    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await userRepository.login({email});

        if (user && await bcrypt.compare(password, user.password)) {
            responses.login(req.body.email,res)
        }
    },
})