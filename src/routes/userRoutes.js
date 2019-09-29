const router = require('express').Router();
const validateUser = require('../middleware/validateUserMiddleware');

module.exports = ({register}) => {   
    router.post("/register", validateUser, register)

    return router;
}