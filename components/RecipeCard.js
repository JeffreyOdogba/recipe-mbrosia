import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecipeCard = ({ recipe }) => {
  const { id, recipeTitle, creator, photo } = recipe;

  return (
    <View style={styles.card}>
      {/* <Image source={photo} /> */}
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{recipeTitle}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="face-profile" size={30} color="black" />
          <Text style={styles.text}>{creator}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "red",
    width: 320,
    height: 230,
    borderRadius: 15,
    justifyContent: "flex-end",
    margin: 5,
  },
  textTitle: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
  textBox: {
    margin: 15,
    marginLeft: 20,
  },
});

export default RecipeCard;
