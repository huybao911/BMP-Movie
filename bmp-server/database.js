const mongoose = require("mongoose");

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.xrv3kif.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

module.exports = Connection;
