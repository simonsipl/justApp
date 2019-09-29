module.exports = connection => {
    const userRepository = require('../repository/userRepository')(connection);
    const userService = require('../service/userService')(userRepository);
    const userController = require('../controller/userController')({userService,userRepository});
    const userRoutes = require('../routes/userRoutes')(userController);

   return userRoutes;
}