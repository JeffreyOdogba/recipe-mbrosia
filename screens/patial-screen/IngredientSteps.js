import React, { useState, useEffect, useContext } from "react";
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

import RecipeContext from "../../context/recipes/recipeContext";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const IngredientStep = (props) => {
  // const saveContext = useContext(RecipeContext);
  const [ingredient, setIngredient] = useState("");

  // const { save } = saveContext;

  // const IngredientInfo = {
  //   steps: props.step,
  //   ingredient: [...ingredient],
  // };
  // useEffect(() => {
  //   console.log(IngredientInfo);
  // });
  return (
    <View style={styles.container}>
      <View style={styles.stepContent}>
        <TextInput
          style={styles.stylesText}
          multiline={true}
          numberOfLines={1}
          placeholder={`Enter Spice ${props.step}`}
          onChangeText={(text) => {
            setIngredient(text);
          }}
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
