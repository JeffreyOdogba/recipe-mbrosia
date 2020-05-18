const router = require("express").Router();
let User = require("../models/user.model");

router.route("/signup").post((req, res) => {
  const dateCreated = Date.now().toLocaleString();

  const { fullname, username, password, profileImage, accountType } = req.body;

  const newUser = new User({
    fullname,
    username,
    password,
    profileImage,
    accountType,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/login").post((req, res) => {});

module.exports = router;
