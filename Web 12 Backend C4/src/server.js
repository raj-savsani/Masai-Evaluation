const express = require('express');
const connect = require('./config/db');
const app = express();

app.use(express.json())


const start = async()=>{
    await connect();
    app.listen(2211,()=>{
        console.log("Listening on Port 2211")
    });
}

module.exports = {app, start}