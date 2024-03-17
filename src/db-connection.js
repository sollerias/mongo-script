const { MongoClient } = require('mongodb')
const {
    DB_URL,
    DB_NAME
} = require('./consts')

const client = new MongoClient(DB_URL);

async function dbConnection() {
    const connection = await client.connect();
    console.log('Connected successfully to server');

    return connection.db(DB_NAME);
}

module.exports = dbConnection;
