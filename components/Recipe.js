import React, { useContext, useEffect } from "react";
import RecipeContext from "../context/recipes/recipeContext";
import { View, Text, StyleSheet } from "react-native";
import RecipeCard from "../components/RecipeCard";
import { ScrollView } from "react-native-gesture-handler";

const Recipe = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes } = recipeContext;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScrollView horizontal={true}>
          {recipes.map((item) => {
            console.log(item);
            return <RecipeCard recipe={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 50,
    backgroundColor: "gray",
    justifyContent: "center",
  },
  card: {
    padding: 30,
  },
});

export default Recipe;
