import React, { useReducer } from "react";
import { ADD_RECIPE, DELETE_RECIPE, GET_RECIPE, SAVE_RECIPE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    default:
      return state;
  }
};
