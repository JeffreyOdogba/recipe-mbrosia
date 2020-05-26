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

const IngredientStep = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>Step {props.step}:</Text>
        <TextInput
          style={styles.stylesText}
          multiline={true}
          numberOfLines={2}
          placeholder="Enter Spice 1"
        ></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  stepContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  stepTitle: {
    fontSize: 25,
  },
  stylesText: {
    borderBottomWidth: 2,
    borderColor: "red",
    width: 300,
  },
});
export default IngredientStep;
