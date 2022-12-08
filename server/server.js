const express = require('express');
const app = express();
require('dotenv').config();
console.log(process.env.MONGO_URL);

const dbConfig = require('./config/dbConfig');


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening on port no ${port}`);
});