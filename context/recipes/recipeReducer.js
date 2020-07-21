import React, { useReducer } from "react";
import { ADD_RECIPE, DELETE_RECIPE, GET_RECIPE, SAVE_RECIPE } from "../types";

export const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        ingredients: action.payload,
      };
  }
};

export const initialState = {
  ingredients: null,
};
