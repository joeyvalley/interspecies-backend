import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); 

const CONNESTING_STRING = process.env.MONGO_URI;

async function connectDB() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {});
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err.message);
      process.exit(1); 
    }
  };
  
  connectDB();

export default mongoose;
