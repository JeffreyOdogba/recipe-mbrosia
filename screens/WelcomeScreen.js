import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
const welcome_1 = require("../assets/welcome_1.jpg");

function WelcomeScreen(props) {
  return (
    <ImageBackground source={welcome_1} style={styles.background}>
      <Text style={styles.header}>
        Welcome to
        <b>
          <i> Mbrosia Recipe</i>
        </b>
      </Text>
      <View style={styles.loginBtn}>
        <Button title="Login" />
      </View>
      <View style={styles.signupBtn}>
        <Text style={styles.signUplink}> SIGN UP </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    paddingTop: 65,
    color: "white",
  },
  loginBtn: {
    position: "absolute",
    backgroundColor: "red",
    bottom: 90,
    width: 270,
  },
  signupBtn: {
    position: "absolute",
    bottom: 60,
    width: 270,
    alignItems: "center",
  },
  signUplink: {
    color: "white",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
