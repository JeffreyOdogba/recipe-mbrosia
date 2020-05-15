const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String, required: false },
    dateCreated: { type: Date, required: true },
    accountType: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", User);

module.exports = User;
