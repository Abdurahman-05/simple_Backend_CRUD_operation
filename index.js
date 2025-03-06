import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import jobROutes from './routes/jobRoutes.js'
import { validateJob ,handleValidationErrors } from "./middleware/jobValidation.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3500;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use("/jobs",validateJob,handleValidationErrors,jobROutes)



connectDB(DB_URL);

mongoose.connection.once("open" , ()=>{
  console.log("MongoDB Connected");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})



// import express from 'express';
// const app = express();

// app.use(express.json());
// app.get('/hello', (req, res) => {
//   res.send(`Hello, ${req.query.person}!`);
// });

// app.listen(3000);

// import express from 'express';
// import { query } from 'express-validator';
// const app = express();

// app.use(express.json());
// app.get('/hello', query('person').notEmpty(), (req, res) => {
//   res.send(`Hello, ${req.query.person}!`);
// });

// app.listen(3000);

// import  express from 'express';
// import { query, validationResult } from 'express-validator';
// const app = express();

// app.use(express.json());
// app.get('/hello', query('person').notEmpty(), (req, res) => {
//   const result = validationResult(req);
//   if (result.isEmpty()) {
//     return res.send(`Hello, ${req.query.person}!`);
//   }

//   res.send({ errors: result.array() });
// });

// app.listen(3000);