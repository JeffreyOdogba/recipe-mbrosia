import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IngredientStep from "./IngredientSteps";

const Ingredients = () => {
  const [stepCounter, setStepCounter] = useState(1);

  const addStepCounterHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.addBtn}>
        <TouchableOpacity onPress={addStepCounterHandler}>
          <Ionicons name="ios-add-circle" size={35} color="red" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentStep}>
          <IngredientStep step={stepCounter} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    alignItems: "flex-end",
  },
  scrollContainer: {
    flex: 1,
  },
  contentStep: {
    backgroundColor: "green",
  },
});
export default Ingredients;
