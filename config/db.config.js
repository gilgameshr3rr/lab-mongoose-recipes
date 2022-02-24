const mongoose = require('mongoose');
const Recipe = require('../models/Recipe.model');

async function connect() {
  const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    console.log(`Connected to the database: "${connection.connection.name}"`);
    // return Recipe.deleteMany();
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

module.exports = connect;


