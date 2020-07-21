import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
import { exp } from "react-native-reanimated";
import setAuthToken from "../../helper/setAuthToken";
import AsyncStorage from "@react-native-community/async-storage";

const AuthState = (props) => {
  const initialState = {
    loading: true,
    username: null,
    token: null,
    isAuthenticated: null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setAuthToken(token);
      }

      dispatch({
        type: USER_LOADED,
        payload: token,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Register User
  const signUp = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        // "http://192.168.2.225:5000/api/user/signup"
        "http://192.168.2.161:5000/api/user/signup",
        formData,
        config
      );
      console.log(JSON.stringify(res));

      await AsyncStorage.setItem("token", res.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: JSON.stringify(res.data),
      });

      // Navigate to Home Screen
    } catch (err) {
      console.log(JSON.stringify(err.res.data.msg));

      await AsyncStorage.removeItem("token");
      dispatch({
        type: REGISTER_FAIL,
        payload: "Something wemt wrong!",
      });
    }
  };

  // Login User
  const login = () => console.log("login");

  // Logout User
  const logout = async () => {
    console.log("logout");
    await AsyncStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
      payload: "Log out completed",
    });
  };

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        username: state.username,
        error: state.error,
        loadUser,
        signUp,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
