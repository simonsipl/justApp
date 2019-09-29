require('dotenv').config();
const PORT = process.env.PORT || 5000;

(async function main() {
  const app = require('./app')(await require('./helpers/db'));

  app.listen(PORT, () => {
    console.log('Listening on port 5000');
  });
})().catch(console.log);