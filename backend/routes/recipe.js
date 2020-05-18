const router = require("express").Router();
let Recipe = require("../models/recipe.model");

router.route("/addrecipe").post((req, res) => {
  const dateCreated = Date.now().toLocaleString();

  const {
    recipeTitle,
    creator,
    summary,
    ingredients,
    procedure,
    cooktime,
    servings,
    kcal,
    comment,
    photo,
  } = req.body;

  const newRecipe = new Recipe({
    recipeTitle,
    creator,
    summary,
    ingredients,
    procedure,
    cooktime,
    servings,
    kcal,
    comment,
    photo,
  });

  newRecipe
    .save()
    .then(() => res.json("Recipe added!"))
    .catch((err) => res.status(400).json("Error: " + err));
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
