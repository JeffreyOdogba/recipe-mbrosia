import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecipeCard = ({ recipe }) => {
  const { id, recipeTitle, creator, photo } = recipe;

  return (
    <View style={styles.card}>
      <ImageBackground
        style={styles.image}
        borderRadius={10}
        source={photo}
      ></ImageBackground>
      {/* <Image source={photo} style={styles.image} borderRadius={10} /> */}
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{recipeTitle}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="face-profile" size={30} color="green" />
          <Text style={styles.text}>
            {creator
              ? creator.charAt(0).toUpperCase() + creator.slice(1)
              : "Fix When Logged in"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 200,
    justifyContent: "flex-end",
    margin: 5,
  },
  image: {
    flex: 1,
    width: 300,
    height: 200,
    opacity: 0.9,
  },
  textTitle: {
    color: "#f1f2f6",
    fontWeight: "bold",
    fontSize: 23,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  textBox: {
    margin: 15,
    marginLeft: 20,
  },
});

export default RecipeCard;
