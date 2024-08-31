const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "cv-web"
    });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

module.exports = connectDB;
