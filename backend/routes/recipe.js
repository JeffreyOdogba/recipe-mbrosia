const router = require("express").Router();
const auth = require("../middleware/auth");
let Recipe = require("../models/recipe.model");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("photo");

// @route POSR api/addrecipe
// @desc Create a recipe
// @access Private
router.route("/addrecipe").post((req, res) => {
  upload(req, res, (err) => {
    console.log(req);
    const {
      recipeTitle,
      creator,
      description,
      ingredients,
      procedures,
      cooktime,
      servings,
      kcal,
      comment,
      photo,
      likes,
    } = req.body;

    console.log(req.file.path);

    const photoPath = req.file.path;

    // var img = fs.readFileSync(req.file.path);
    // var encode_image = img.toString("base64");
    // Define a JSONobject for the image attributes for saving to database

    // var finalImg = {
    //   contentType: req.file.mimetype,
    //   image: new Buffer(encode_image, "base64"),
    // };

    // console.log(img);
    // console.log(finalImg);

    const newRecipe = new Recipe({
      recipeTitle,
      creator,
      description,
      ingredients,
      procedures,
      cooktime,
      servings,
      kcal,
      comment,
      photoPath,
      likes,
    });

    //console.log(newRecipe);
    // newRecipe
    //   .save()
    //   .then(() => res.json("Recipe added!"))
    //   .catch((err) => {
    //     res.status(400).json("Error: " + err);
    //     console.log(err);
    //   });
  });
});

// Get All Recipe
router.route("/").get((req, res) => {
  Recipe.find()
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get selected Recipe
router.route("/:id").get((req, res) => {
  Recipe.findById(req.param.id)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
