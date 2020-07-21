import React, { useState, useEffect, useContext } from "react";
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
import { Entypo } from "@expo/vector-icons";
import IngredientStep from "./IngredientSteps";

import AsyncStorage from "@react-native-community/async-storage";
import RecipeContext from "../../context/recipes/recipeContext";

const Ingredients = () => {
  const saveContext = useContext(RecipeContext);
  const [query, setQuery] = useState("");
  const [itemingredient, setItemingredient] = useState([]);

  const { collectIngredients } = saveContext;

  const onHandeleAdd = () => {
    setItemingredient([
      ...itemingredient,
      {
        id: itemingredient.length,
        value: query,
      },
    ]);
    setQuery("");
  };

  const saveBtn = () => {
    try {
      // console.log(itemingredient);
      AsyncStorage.setItem("itemingredient", JSON.stringify(itemingredient));
      collectIngredients({ itemingredient });
    } catch (error) {
      // Error saving data
    }
  };

  const removeItem = (index) => {
    const newList = itemingredient.filter((item) => item.id !== index);
    //console.log(newList);

    setItemingredient(newList);
  };

  useEffect(() => {
    try {
      AsyncStorage.getItem("itemingredient")
        .then((value) => {
          if (value !== null) {
            //console.log(JSON.parse(value));
            const arrayValue = JSON.parse(value);
            //console.log(arrayValue);
            setItemingredient(arrayValue);
          }
        })
        .done();
    } catch (error) {}
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentStep}>
          <View style={{ marginVertical: 15 }}>
            <View style={styles.stepContent}>
              <TextInput
                style={styles.stylesText}
                multiline={true}
                numberOfLines={1}
                value={query}
                placeholder={`Enter Spice  `}
                clearButtonMode="always"
                onChangeText={(text) => {
                  setQuery(text);
                }}
              ></TextInput>
            </View>
          </View>
        </View>

        {itemingredient.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => removeItem(item.id)}>
            <View style={styles.items} key={item.id}>
              <Text style={styles.itemText} key={item.id}>
                {item.value}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.addBtn}>
          <TouchableOpacity onPress={saveBtn}>
            <Entypo name="save" size={50} color="red" />
          </TouchableOpacity>
        </View>

        <View style={styles.addBtn}>
          <TouchableOpacity onPress={onHandeleAdd}>
            <Ionicons name="ios-add-circle" size={60} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    flexDirection: "row",
    marginBottom: 5,
  },
  itemText: {
    borderRadius: 5,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#e77f67",
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
  stepTitle: {
    fontSize: 23,
  },
  stylesText: {
    borderBottomWidth: 2,
    borderColor: "#e77f67",
    fontSize: 21,
  },
});
export default Ingredients;
