import mongoose from "mongoose";
import 'dotenv/config'
import express from "express";


const connectDB = async (DB_URL) => {
  try {
    const connection = await mongoose.connect(DB_URL);
  
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};


export default connectDB;