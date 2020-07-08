import "react-native-gesture-handler";
import React, { useState, useContext, useReducer, useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpForm from "./screens/SignUpForm";
import LoginDialog from "./screens/patial-screen/LoginForm";
import Home from "./screens/Home";
import CreateRecipe from "./screens/CreateRecipe";
import RecipeState from "./context/recipes/RecipeState";

import Ingredients from "./screens/patial-screen/Ingredients";
import AuthState from "./context/auth/authState";
import AsyncStorage from "@react-native-community/async-storage";
import setAuthToken from "./helper/setAuthToken";
import { reducer, initialState } from "./context/auth/authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  AUTH_ERROR,
} from "./context/types";

import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   // Fetch the token from storage then navigate to our appropriate place
  //   const bootstrapAsync = async () => {
  //     let token;

  //     try {
  //       token = await AsyncStorage.getItem("token");
  //     } catch (e) {
  //       // Restoring token failed
  //       console.log(e.message);
  //       dispatch({ type: "REGISTER_FAIL", token: token });
  //     }

  //     // After restoring token, we may need to validate it in production apps

  //     // This will switch to the App screen or Auth screen and this loading
  //     // screen will be unmounted and thrown away.
  //     dispatch({ type: "USER_LOADED", token: token });
  //   };

  //   bootstrapAsync();
  // }, []);

  // // Register User
  // const authContext = React.useMemo(
  //   () => ({
  //     signUp: async (formData) => {
  //       const config = {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       };
  //       try {
  //         const res = await axios.post(
  //           "http://192.168.2.225:5000/api/user/signup",
  //           formData,
  //           config
  //         );
  //         console.log(JSON.stringify(res + " In SignUp 1"));

  //         await AsyncStorage.setItem("token", res.data.token);
  //         dispatch({
  //           type: REGISTER_SUCCESS,
  //           payload: JSON.stringify(res.data),
  //         });

  //         // Navigate to Home Screen
  //       } catch (err) {
  //         console.log(JSON.stringify(err.res.data.msg) + " Sign 2");

  //         await AsyncStorage.removeItem("token");
  //         dispatch({
  //           type: REGISTER_FAIL,
  //           payload: "Something wemt wrong!",
  //         });
  //       }
  //     },
  //     signIn: async (data) => {
  //       console.log("Sign In entered");
  //       const config = {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       };
  //       try {
  //         const res = await axios.post(
  //           "http://192.168.2.225:5000/api/user/login",
  //           data,
  //           config
  //         );
  //         console.log(JSON.stringify(res + " In SignUp 1"));

  //         await AsyncStorage.setItem("token", res.data.token);
  //         dispatch({
  //           type: LOGIN_SUCCESS,
  //           payload: JSON.stringify(res.data),
  //         });

  //         // Navigate to Home Screen
  //       } catch (err) {
  //         console.log(JSON.stringify(err.res.data.msg) + " Sign 2");

  //         await AsyncStorage.removeItem("token");
  //         dispatch({
  //           type: REGISTER_FAIL,
  //           payload: "Something wemt wrong!",
  //         });
  //       }
  //     },
  //   }),
  //   []
  // );

  return (
    <RecipeState>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home";
              } else if (route.name === "CreateRecipe") {
                iconName = focused ? "ios-restaurant" : "ios-restaurant";
              }

              return <Ionicons name={iconName} size={32} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="CreateRecipe" component={CreateRecipe} />
        </Tab.Navigator>
      </NavigationContainer>
    </RecipeState>
  );
}
