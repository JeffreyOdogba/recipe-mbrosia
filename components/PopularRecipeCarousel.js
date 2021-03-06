import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const PopularRecipeCarousel = ({ recipe }) => {
  const { id, recipeTitle, creator, photo } = recipe;

  return (
    <View style={styles.card}>
      <ImageBackground style={styles.image} borderRadius={10} source={photo} />
      <View style={styles.textBox}>
        <Text style={styles.textTitle}>{recipeTitle}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="face-profile" size={30} color="black" />
          <Text style={styles.text}>
            {creator.charAt(0).toUpperCase() + creator.slice(1)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 230,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    width: 350,
    height: 230,
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

export default PopularRecipeCarousel;
