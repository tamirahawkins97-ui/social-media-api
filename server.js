//DEPENDANCIES 
const express = require('express');
const app = express();
require('dotenv').config();
const {  MongoClient } = require('mongodb')
const uri = process.env.MONGO_URI
const PORT = 5889;

//MIDDLEWARE
const client = new MongoClient(uri)

//DATABASE
//MongoDB Connection
app.get('/', async (req, res) => {
  try {
    // Attempt to connect and ping. This is used to verify the connection has reached the database. 
    await client.connect();
    console.log("Successfully connected by the GOAT");
    await client.db("Tamira's-DummyDB").command({ping: 2})
    res.status(200).json({ message: "Successfully connected to the database!( Cuz Mira's the goat:D )" });
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    res.status(500).json({ message: "Failed to connect to the database.( Even the goat makes mistakes :/ )" });
  }
});

//ROUTES

//I.N.D.U.C.E.S

//Index - List
//N
//D
//U
//C
//E
//S - show


//PORT
app.listen(PORT,(req,res)=>{
    console.log(`Server is now running on: http://localhost:${PORT}`)
});