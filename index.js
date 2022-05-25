const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;
const url =
  "mongodb+srv://admin:admin@cluster0.kh8mu9q.mongodb.net/todo?retryWrites=true&w=majority";

async function start() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });

    app.listen(PORT, () => {
      console.log(`Server starte ${PORT}`);
    });
  } catch (error) {
    console.log("error", error);
  }
}
