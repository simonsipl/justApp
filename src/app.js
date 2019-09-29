const express = require('express');
const { clientError, serverError } = require('./errors/error');

const userConfig = require('./config/userConfig');

module.exports = (connection) => {
  const app = express();

  app.use(express.json());

  app.use('/user', userConfig(connection));

  app.use(clientError);
  app.use(serverError);

  return app;
};
