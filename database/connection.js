const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Added for latest versions of Mongoose
      useFindAndModify: false, // Avoids DeprecationWarning for findAndModify
      useCreateIndex: true, // Avoids DeprecationWarning for ensureIndex
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection to MongoDB failed', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;