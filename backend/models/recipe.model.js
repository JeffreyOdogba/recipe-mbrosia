const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    recipeTitle: { type: String, required: true },
    creator: { type: String, required: false },
    description: { type: String, required: true },
    ingredients: [{ type: Object, required: false }],
    procedures: [{ type: Object, required: true }],
    cooktime: { type: Number, required: true },
    servings: { type: Number, required: true },
    kcal: { type: Number, required: false },
    comment: [{ type: Object, required: false }],
    photo: [{ type: Object, required: true }],
    likes: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
