require('dotenv').config();

(async function main() {
  const app = require('./app')(await require('./helpers/db'));

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
})().catch(console.log);