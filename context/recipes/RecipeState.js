import React, { useReducer } from "react";
import axios from "axios";
import RecipeContext from "./recipeContext";
import recipeReducer from "./recipeReducer";
import { ADD_RECIPE, DELETE_RECIPE, GET_RECIPE, SAVE_RECIPE } from "../types";
import AsyncStorage from "@react-native-community/async-storage";
import { Platform } from "react-native";

const RecipeState = (props) => {
  const initialState = {
    recipes: [
      {
        recipeTitle: "Suya Meat",
        creator: "Jewel Odogba",
        summary: "The is Nigerian best Suya for refreshment",
        ingredients: ["pepper", "beef", "water", "oil", "sticks", "onion"],
        procedures: [
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
        procedures: [
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
        procedures: [
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
  const addRecipe = async (recipe) => {
    try {
      const data = new FormData();

      const uri =
        Platform.OS === "android"
          ? recipe.photo
          : recipe.photo.replace("file://", "");

      data.append("recipeTitle", recipe.recipeTitle);
      data.append("description", recipe.description);
      data.append("servings", recipe.servings);
      data.append("cooktime", recipe.cooktime);
      data.append("ingredients", JSON.stringify(recipe.ingredients));
      data.append("procedures", JSON.stringify(recipe.procedures));
      data.append("photo", {
        uri: uri.uri,
        type: "image/jpeg",
        name: uri.fileName || uri.uri.substr(uri.uri.lastIndexOf("/") + 1),
      });

      const config = {
        method: "POST",

        body: data,
      };
      fetch("http://10.0.0.61:5000/api/recipe/addrecipe", config)
        .then((checkStatusAndGetJSONResponse) => {
          console.log(checkStatusAndGetJSONResponse);
        })
        .catch((err) => {
          console.log(err);
        });

      dispatch({ type: ADD_RECIPE, payload: recipe });

      console.log("---Publish Data----");
      console.log(JSON.stringify(data));
    } catch (error) {}
  };

  // Delete Recipe

  // Update Recipe

  // Collect Recipe

  const procedureData = (data) => {
    const procedure = JSON.stringify(data);
    console.log(procedure);
    return { procedure };
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        procedureData,
        addRecipe,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
