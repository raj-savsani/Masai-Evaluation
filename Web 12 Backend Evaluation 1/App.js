const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const connect = ()=>{

   return mongoose.connect("mongodb://127.0.0.1:27017/Nakuri");
} 


const CompanySchema







app.listen(1234, async (req, res) => {
    await connect();
    console.log("Listening on port 1234");
})