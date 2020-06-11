import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./WelcomeScreen";
import SignUpForm from "./SignUpForm";
import LoginDialog from "./patial-screen/LoginForm";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <RootStack.Screen name="LoginDialog" component={LoginDialog} />
      <RootStack.Screen name="SignUpForm" component={SignUpForm} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
