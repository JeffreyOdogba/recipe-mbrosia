const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
var path = require("path");
app.use(express.static("./uploads"));
app.use(express.static(path.join(__dirname, "uploads")));
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const recipeRouter = require("./routes/recipe");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Use Router
app.use("/api/user", userRouter);
app.use("/api/recipe", recipeRouter);

app.listen(port, () => {
  console.log(`listening on hahah port ${port}`);
});

module.exports = app;
