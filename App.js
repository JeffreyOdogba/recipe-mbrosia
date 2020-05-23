import "react-native-gesture-handler";
import React from "react";

import WelcomeScreen from "./screens/WelcomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpForm from "./screens/SignUpForm";
import Home from "./screens/Home";
import LoginDialog from "./screens/patial-screen/LoginForm";
import CreateRecipe from "./screens/CreateRecipe";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignUpForm" component={SignUpForm} />
        <Stack.Screen name="LoginDialog" component={LoginDialog} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateRecipe" component={CreateRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
