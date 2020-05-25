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
import Tabbar from "./patial-screen/Tabbar";

const CreateRecipe = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Create Recipe</Text>
        <Tabbar navigation={navigation} />
      </View>

      <View style={styles.footer}>
        <FooterMenu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: "#f5f4ed",
  },
  header: {
    flex: 0.2,
    paddingTop: 37,
  },
  textHeader: {
    fontSize: 34,
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
    borderRadius: 5,
    paddingTop: 10,
  },
  footer: {
    flex: 1,
  },
});

export default CreateRecipe;
