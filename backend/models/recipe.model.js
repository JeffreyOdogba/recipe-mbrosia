const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    recipeTitle: { type: String, required: true },
    creator: { type: String, required: true },
    summary: { type: String, required: true },
    ingredients: [{ type: String, required: false }],
    procedure: [{ type: String, required: true }],
    cooktime: { type: String, required: true },
    servings: { type: int, required: true },
    kcal: { type: int, required: true },
    comment: [{ type: String, required: false }],
    photo: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("User", recipeSchema);

module.exports = Recipe;
