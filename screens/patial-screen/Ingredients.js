import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import IngredientStep from "./IngredientSteps";

const Ingredients = () => {
  const [stepCounter, setStepCounter] = useState([{ id: 1, value: 1 }]);

  const IngredientInfo = {
    id: "",
    spice: "",
  };

  const addSpiceViewHandler = () => {
    setStepCounter((stepCounter) => [
      ...stepCounter,
      {
        id: stepCounter[stepCounter.length - 1].id + 1,
        value: stepCounter[stepCounter.length - 1].value + 1,
      },
    ]);
    console.log(stepCounter);
  };

  const onHandeleContinue = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentStep}>
          {stepCounter.map((item) => (
            <View style={{ marginVertical: 15 }} key={item.id}>
              <IngredientStep step={item.value} />
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={onHandeleContinue}>
          <View style={styles.contiuneBtn}>
            <Text style={styles.contiuneText}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.addBtn}>
        <TouchableOpacity onPress={addSpiceViewHandler}>
          <Ionicons name="ios-add-circle" size={60} color="red" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    alignItems: "flex-end",
    shadowOpacity: 1.0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowRadius: 3,
  },
  scrollContainer: {
    flex: 1,
  },
  contentStep: {
    paddingTop: 15,
  },
  contiuneBtn: {
    backgroundColor: "red",
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
    height: hp("7.4"),
    borderRadius: 13,
  },
  contiuneText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
export default Ingredients;
