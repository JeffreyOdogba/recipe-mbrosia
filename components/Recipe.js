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
        <Text style={styles.Nheader}>New Recipes</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {recipes.map((item, i) => {
            return <RecipeCard key={i} recipe={item} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 50,
    justifyContent: "center",
    justifyContent: "flex-start",
  },
  card: {
    padding: 30,
  },
  Nheader: {
    fontSize: 30,
  },
});

export default Recipe;
