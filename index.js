// const express = require('express');
// const app = express();
// require('dotenv').config()
// const port = process.env.PORT || 3500;

// app.use(express.json());

// app.all('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   res.sendStatus(200);
//   next() // pass control to the next handler
// })
// app.get("/",(req,res) =>{
//   res.send("hello world");
// });

// app.post("/",(req,res)=>{
//   const name = req.body;
//   res.send(`Hello ${Object.values(name)}!!`);
// });

// app.listen(port,() =>{console.log(`Example app listening on port ${port}`)});

// const  mongoose = require("mongoose")
// const express = require('express');
// const app = express();
// require('dotenv').config()

// const port = process.env.PORT || 3500;

// app.use(express.json());
// const connectDB = async ()=>{
//   try {
//     await mongoose.connect(process.env.DB_URL)
//     console.log("connected");
//   } catch (error) {
//     console.log(error.message);
//     process.exit(1);
//   }
// }

// app.get("/", (req, res) => {
//   res.send("Hello, MongoDB with Express using Try/Catch!");
// });

// connectDB();
// // Start Server

// mongoose.connection.once("open",()=>{
//   console.log("db connected");
//   app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
//   });

// })

// import mongoose from "mongoose";
// import express from "express";
// import connectDB from "./config/db.ts";
// import 'dotenv/config';

// const app = express();
// dotenv.config();

// const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/jobs";

// connectDB(DB_URL);

// const port = process.env.PORT || 3500;

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import jobROutes from './routes/jobRoutes.js'
const app = express();
dotenv.config();

const port = process.env.PORT || 3500;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use("/jobs",jobROutes)



connectDB(DB_URL);

mongoose.connection.once("open" , ()=>{
  console.log("MongoDB Connected");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})
