import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const IngredientStep = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepContent}>
        <TextInput
          style={styles.stylesText}
          multiline={true}
          numberOfLines={1}
          placeholder={`Enter Spice ${props.step}`}
        ></TextInput>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  stepContent: {},
  stepTitle: {
    fontSize: 23,
  },
  stylesText: {
    borderBottomWidth: 2,
    borderColor: "red",
    fontSize: 21,
  },
});
export default IngredientStep;
