import React, { useContext, useEffect, useState } from "react";
import RecipeContext from "../context/recipes/recipeContext";
import { View, Text, StyleSheet } from "react-native";
import PopularRecipeCarousel from "../components/PopularRecipeCarousel";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PopularRecipe = () => {
  const { recipes } = useContext(RecipeContext);
  //const { recipes } = recipeContext;

  const [active, setActive] = useState({ active: 0 });
  let t = recipes.filter((item) => item.likes >= 100);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Nheader}>Popular Recipes</Text>
        <MaterialCommunityIcons name="face-profile" size={40} color="black" />
      </View>

      <View style={styles.card}>
        <ScrollView
          horizontal
          onScroll={change}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{ width: 350, height: 230 }}
        >
          {t.map((item, i) => {
            return <PopularRecipeCarousel key={i} recipe={item} />;
          })}
        </ScrollView>
        <View style={styles.dot}>
          {t.map((item, i) => {
            return (
              <Text
                key={i}
                style={i == active ? styles.dotActive : styles.nonDotActive}
              >
                ⬤
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 50,
    padding: 30,
    justifyContent: "center",
  },
  card: {
    marginTop: 15,
  },
  Nheader: {
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 51,
  },
  dot: {
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: 10,
  },
  dotActive: {
    color: "red",
    fontSize: 15,
  },
  nonDotActive: {
    color: "#f3a683",
  },
});

export default PopularRecipe;
