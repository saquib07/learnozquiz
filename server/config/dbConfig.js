const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log("Mongo Db connection successful");
});

connection.on('error', () => {
    console.log("Mongo Db connection failed");
});

module.exports = connection;