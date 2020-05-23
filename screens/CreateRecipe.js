import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import FooterMenu from "./patial-screen/FooterMenu";

const CreateRecipe = (props) => {
  return (
    <View style={styles.container}>
      <Text>Create Recipe</Text>

      <View style={styles.footer}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 5,
    backgroundColor: "#f5f4ed",
  },
  footer: {
    flex: 1,
  },
});

export default CreateRecipe;
