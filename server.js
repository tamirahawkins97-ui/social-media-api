//DEPENDANCIES 
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 5889;

//MIDDLEWARE


//ROUTES

//PORT
app.listen(PORT,(req,res)=>{
    console.log(`Server is now running on: http://localhost:${PORT}`)
})