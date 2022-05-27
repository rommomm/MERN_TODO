const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;
const url =
  "mongodb+srv://admin:admin@cluster0.kh8mu9q.mongodb.net/todo?retryWrites=true&w=majority";

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/todo", require("./routes/todo.route"));

async function start() {
  try {
    await mongoose.connect(url);

    app.listen(PORT, () => {
      console.log(`Server starte ${PORT}`);
    });
  } catch (error) {
    console.log("error", error);
  }
}

start();
