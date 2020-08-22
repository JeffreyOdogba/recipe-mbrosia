import React, { useContext, useEffect } from "react";
import RecipeContext from "../context/recipes/recipeContext";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const PantryCard = ({ navigation }) => {
  //   const recipeContext = useContext(RecipeContext);

  //   const { recipes } = recipeContext;

  return (
    <View style={styles.container}>
      <View style={styles.cHolder}>
        <View style={styles.cardimage}></View>
        <Text style={styles.dTitle}>Desserts</Text>
        <Text style={styles.desc}>10 Recipes</Text>
      </View>
      <View style={styles.cHolder}>
        <View style={styles.cardimage}></View>
        <Text style={styles.dTitle}>Desserts</Text>
        <Text style={styles.desc}>10 Recipes</Text>
      </View>
      <View style={styles.cHolder}>
        <View style={styles.cardimage}></View>
        <Text style={styles.dTitle}>Desserts</Text>
        <Text style={styles.desc}>10 Recipes</Text>
      </View>
      <View style={{ padding: 10 }}>
        <View style={styles.cardimagec}>
          <TouchableOpacity onPress={() => navigation.navigate("ModelStack")}>
            <Ionicons
              name="ios-add-circle"
              size={39}
              style={{ marginLeft: 8, marginTop: 15 }}
              color="#33d9b2"
            />
          </TouchableOpacity>
          <View
            style={{ justifyContent: "flex-end", flex: 1, paddingBottom: 9 }}
          >
            <Text style={{ marginLeft: 8, fontSize: 18, color: "#f7f1e3" }}>
              Create
            </Text>
            <Text style={{ marginLeft: 8, fontSize: 18, color: "#f7f1e3" }}>
              Pantry
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexWrap: "wrap",
    alignContent: "stretch",
  },
  cHolder: {
    padding: 10,
  },
  cardimage: {
    backgroundColor: "#218c74",
    height: 180,
    borderRadius: 10,
  },
  cardimagec: {
    backgroundColor: "#218c74",
    height: 180,
    borderRadius: 10,
  },
  dTitle: {
    fontSize: 15,
  },
  desc: {
    fontSize: 10,
  },
});

export default PantryCard;
