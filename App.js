import "react-native-gesture-handler";
import React, { useState, useEffect, useMemo, useReducer } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpForm from "./screens/SignUpForm";
import LoginDialog from "./screens/patial-screen/LoginForm";
import Home from "./screens/Home";
import CreateRecipe from "./screens/CreateRecipe";
import Ingredients from "./screens/patial-screen/Ingredients";
import { View, ActivityIndicator, Alert } from "react-native";
import { AuthContext } from "./components/context";
import AsyncStorage from "@react-native-community/async-storage";
import sleep from "./helper/sleep";
const Stack = createStackNavigator();

export default function App() {
  // const [isLoading, setLoading] = useState(true);
  // const [userToken, setUsertoken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (preState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...preState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...preState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...preState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...preState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };

      default:
        break;
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (username, password) => {
        // setUsertoken("qazwsx");
        // setLoading(false);
        let userToken;
        userToken = null;
        if (username === "" || password === "") {
          Alert.alert(
            "Username or Password cannot be empty",
            "Please Try again"
          );
        } else {
          if (username === "Jeff" && password === "pass") {
            userToken = "qazwsx";
            try {
              await AsyncStorage.setItem("userToken", userToken);
            } catch (e) {
              console.log(e);
            }
          } else {
            Alert.alert("Wrong password", "Try again");
          }
        }

        dispatch({ type: "LOGIN", id: username, token: userToken });
      },
      signOut: async () => {
        // setUsertoken(null);
        // setLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      register: async (fullname, username, password, email, selectedValue) => {
        // setUsertoken("qazwsx");
        // setLoading(false);

        let userToken;
        userToken = null;

        await fetch("http://192.168.2.225:5000/api/user/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fullname: fullname,
            email: email,
            username: username,
            password: password,
            accountType: selectedValue,
          }),
        })
          .then(() => {
            userToken = "qazwsx";
            try {
              AsyncStorage.setItem("userToken", userToken);
            } catch (e) {
              console.log(e);
            }
          })
          .catch(function (error) {
            console.log(error.message);
            throw error;
          });
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken", userToken);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "REGISTER", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CreateRecipe" component={CreateRecipe} />
            <Stack.Screen name="Ingredients" component={Ingredients} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginDialog" component={LoginDialog} />
            <Stack.Screen name="SignUpForm" component={SignUpForm} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
