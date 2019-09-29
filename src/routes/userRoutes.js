const router = require('express').Router();
const validateUser = require('../middleware/validateUserMiddleware');

module.exports = ({ register, login }) => {
    router.post("/register", validateUser, register)
    router.post("/login", validateUser, login)

    return router;
}