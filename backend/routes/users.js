const router = require("express").Router();
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const secretOrKey = process.env.JWT_SECRET;
let User = require("../models/user.model");

router.route("/signup").post((req, res) => {
  const dateCreated = Date.now().toLocaleString();

  const {
    fullname,
    email,
    username,
    password,
    profileImage,
    accountType,
  } = req.body;

  User.findOne({ username: username }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ success: false, username: "Username already exists" });
    } else {
      const newUser = new User({
        fullname,
        email,
        username,
        password,
        profileImage,
        accountType,
      });
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              // Create JWT Payload
              const payload = {
                id: user.id,
                name: user.username,
              };
              // Sign token
              jwt.sign(
                payload,
                secretOrKey,
                {
                  expiresIn: 31556926, // 1 year in seconds
                },
                (err, token) => {
                  if (err) throw err;

                  res.json({
                    success: true,
                    token: "Bearer " + token,
                    user: {
                      id: user.id,
                      username: user.username,
                      email: user.email,
                    },
                  });
                }
              );
            })
            .catch((err) => res.status(400).json("Error: " + err));
        });
      });
    }
  });
});

router.route("/login").post((req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(404).json({ usernameNotFound: "Username not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(function (result) {
      if (result) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.username,
        };
        // Sign token
        jwt.sign(
          payload,
          secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              user: {
                id: user.id,
                username: user.username,
                email: user.email,
              },
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
