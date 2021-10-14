const mongoose = require('mongoose');
const db = process.env.DATABASE_URL;
const database = async () => {
  try {
    await mongoose.connect(db, {
      // useNewUrlParsel: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log('database connected');
  } catch (error) {
    console.log(error);
  }
};
module.exports = database;
