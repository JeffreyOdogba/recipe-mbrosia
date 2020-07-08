import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./recipeContext";
import recipeReducer from "./recipeReducer";
import { ADD_RECIPE, DELETE_RECIPE, GET_RECIPE } from "../types";

const food1 = require("../../assets/food1.jpg");
const food2 = require("../../assets/food2.jpg");

const RecipeState = (props) => {
  const initialState = {
    recipes: [
      {
        recipeTitle: "Suya Meat",
        creator: "great",
        summary: "The is Nigerian best Suya for refreshment",
        ingredients: ["pepper", "beef", "water", "oil", "sticks", "onion"],
        procedure: [
          "put some oil in the fry pan; let the oil heat up for 3 min",
          "put in onions to fry",
          "boils the beef so it can be tender 10 min",
          "roast the beef with onion",
        ],
        cooktime: 50,
        servings: 4,
        kcal: 150,
        comment: ["So lovely", "I followed your steps but its too spicy"],
        photo: [food1],
        likes: 30,
      },
      {
        recipeTitle: "Jollof Rice",
        creator: "nationggreat",
        summary: "The is Nigerian best rice remedy",
        ingredients: ["pepper", "rice", "water", "oil", "tomato", "onion"],
        procedure: [
          "put some oil in the fry pan; let the oil heat up for 3 min",
          "put in onions to fry",
          "blah blah blah",
        ],
        cooktime: 30,
        servings: 4,
        kcal: 200,
        comment: [
          "its not originated from Nigerian",
          "I followed your steps but its too spicy",
        ],
        photo: [food2],
        likes: 400,
      },
    ],
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Add Recipe

  // Delete Recipe

  // Update Recipe

  // Filter Recipe

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
