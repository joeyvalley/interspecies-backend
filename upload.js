import mongoose from "mongoose";
import dotenv from "dotenv";
import Newsletter from "./models/newsletter.js"; // Import your model
import newsletter_data from "./data/newsletters.js"; // Import your data

dotenv.config(); // Load environment variables

const uploadData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data (optional)
    await Newsletter.deleteMany();
    console.log("Existing data cleared");

    // Insert new data
    await Newsletter.insertMany(newsletter_data);
    console.log("Data uploaded successfully");

    // Close the connection
    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (err) {
    console.error("Error uploading data:", err.message);
    process.exit(1); // Exit with an error
  }
};

uploadData();