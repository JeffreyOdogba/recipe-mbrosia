import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./recipeContext";
import recipeReducer from "./recipeReducer";
import { ADD_RECIPE, DELETE_RECIPE, GET_RECIPE, SAVE_RECIPE } from "../types";
import AsyncStorage from "@react-native-community/async-storage";

const RecipeState = (props) => {
  const initialState = {
    recipes: [
      {
        recipeTitle: "Suya Meat",
        creator: "Jewel Odogba",
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
        photo: require("../../assets/food1.jpg"),
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
        photo: require("../../assets/food2.jpg"),
        likes: 400,
      },
      {
        recipeTitle: "Rice and Beans",
        creator: "David Smith",
        summary: "The is Ghana best!",
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
        photo: require("../../assets/food2.jpg"),
        likes: 300,
      },
    ],
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // Add Recipe
  const addRecipe = () => {};

  // Delete Recipe

  // Update Recipe

  // Collect Recipe

  const collectIngredients = (data) => {
    console.log();
    console.log("---- State --- ");
    console.log(JSON.stringify(data));
    return data;
  };
  const summaryData = (recipeTitle, summary, servingCount, cookingCount) => {
    console.log("---- summary --- ");
    const data = {
      name: recipeTitle,
      desc: summary,
      serving: servingCount,
      cookingTime: cookingCount,
    };
    console.log(JSON.stringify(data));
    return data;
  };

  const procedureData = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        collectIngredients,
        summaryData,
        procedureData,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
