const express = require('express');
const path = require('path');
const { clientError, serverError } = require('./errors/error');

const userConfig = require('./config/userConfig');

module.exports = (connection) => {
  const app = express();
  app.use(express.json());
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get('/api', (req, res) => {
    res.send({
      welcome: 'Hello your express + React app is working',
      someOtherResponse: 'I it just for learning purpose'
    });
  });

  app.use('/api/user', userConfig(connection));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });

  app.use(clientError);
  app.use(serverError);

  return app;
};
