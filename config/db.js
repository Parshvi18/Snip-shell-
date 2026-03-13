const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://pharkawat18_db_user:Pari%401808@cluster0.vdut4np.mongodb.net/snipshell");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;