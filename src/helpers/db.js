const { MongoClient } = require('mongodb');

const url = process.env.MONGO_CLIENT_URL;

module.exports = MongoClient.connect(url, {
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((client) => client.db());