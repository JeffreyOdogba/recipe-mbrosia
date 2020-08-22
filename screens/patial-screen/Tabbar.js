import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Summary from "./Summary";
import Ingredients from "./Ingredients";
import Procedure from "./Procedure";
import RecipeContext from "../../context/recipes/recipeContext";
import AsyncStorage from "@react-native-community/async-storage";
import * as Permissions from "expo-permissions";

const Tabbar = (props) => {
  const { addRecipe } = useContext(RecipeContext);
  const [index, setIndex] = useState("1");
  const [summary, setSummary] = useState({
    recipeTitle: "",
    description: "",
    servings: "",
    cooktime: "",
    kcals: "",
    photo: {},
    ingredients: {},
    procedures: {},
  });

  const [submit, setSubmit] = useState(false);

  onChangeIndex = (text) => {
    setIndex(text);
  };

  const publish = async () => {
    addRecipe(summary);
    setSubmit(true);

    setSummary("");
    await AsyncStorage.removeItem("recipeTitle");
    await AsyncStorage.removeItem("summary");
    await AsyncStorage.removeItem("serveCounter");
    await AsyncStorage.removeItem("cookCounter");
    await AsyncStorage.removeItem("kcals");
  };

  useEffect(() => {
    AsyncStorage.getItem("recipeTitle")
      .then((value) => {
        if (value !== null) {
          setSummary({ ...summary, recipeTitle: value });
        }
      })
      .done();

    AsyncStorage.getItem("summary")
      .then((value) => {
        if (value !== null) {
          setSummary({ ...summary, description: value });
        }
      })
      .done();
    AsyncStorage.getItem("serveCounter")
      .then((value) => {
        //const val = parseInt(value, 10);
        if (value !== null) {
          setSummary({ ...summary, servings: value });
        }
      })
      .done();

    AsyncStorage.getItem("cookCounter")
      .then((value) => {
        if (value !== null) {
          setSummary({ ...summary, cooktime: value });
        }
      })
      .done();

    AsyncStorage.getItem("kcals")
      .then((value) => {
        if (value !== null) {
          setSummary({ ...summary, kcals: value });
        }
      })
      .done();

    console.log(summary.image);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tabcontent}>
        <TouchableOpacity onPress={() => onChangeIndex("1")}>
          <View
            style={[
              styles.tab,
              index === "1" ? styles.selectedIndex : styles.unselectedIndex,
            ]}
          >
            <Text style={styles.tabText}>Summary</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeIndex("2")}>
          <View
            style={[
              styles.tab,
              index === "2" ? styles.selectedIndex : styles.unselectedIndex,
            ]}
          >
            <Text style={styles.tabText}>Ingredients </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeIndex("3")}>
          <View
            style={[
              styles.tab,
              index === "3" ? styles.selectedIndex : styles.unselectedIndex,
            ]}
          >
            <Text style={styles.tabText}>Procedure</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        {index === "1" && (
          <Summary
            navigation={props.navigation}
            //Recipe Title
            onChangeTitle={(value) => {
              setSummary({ ...summary, recipeTitle: value });
              AsyncStorage.setItem("recipeTitle", value);
            }}
            titleValue={summary.recipeTitle}
            // Summery / Description
            onChangeDescription={(value) => {
              setSummary({ ...summary, description: value });
              AsyncStorage.setItem("summary", value);
            }}
            descriptionValue={summary.description}
            // Servings
            onChangeServingCount={(value) => {
              setSummary({ ...summary, servings: value });
              AsyncStorage.setItem("serveCounter", value);
            }}
            servingValue={summary.servingCount}
            // Cooking Time
            onChangeCookingCount={(value) => {
              setSummary({ ...summary, cooktime: value });
              AsyncStorage.setItem("cookCounter", value);
            }}
            cookingValue={summary.cookingCount}
            // kcals
            onChangeCookingCount={(value) => {
              setSummary({ ...summary, kcals: value });
              AsyncStorage.setItem("kcals", value);
            }}
            kcalsValue={summary.kcals}
            // Image
            submit={submit}
            onChangeImage={(value) => {
              setSummary({ ...summary, photo: value });
            }}
          />
        )}

        {index === "2" && (
          <Ingredients
            navigation={props.navigation}
            onChangeIngredients={(value) => {
              setSummary({ ...summary, ingredients: value });
            }}
          />
        )}

        {index === "3" && (
          <Procedure
            navigation={props.navigation}
            publish={async () => {
              publish();
            }}
            onChangeProcedures={(value) =>
              setSummary({ ...summary, procedures: value })
            }
          />
        )}
      </View>

      {/* <View>
        <Text>{JSON.stringify(summary)}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#dedede",
    width: wp("31.70%"),
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  menuContainer: {},
  selectedIndex: {
    backgroundColor: "red",
    borderRadius: 5,
    color: "white",
  },
  unselectedIndex: {
    color: "black",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabcontent: {
    flex: 9,
    justifyContent: "center",
    flexDirection: "row",
  },
  contentContainer: {
    flex: 90,
  },
});

export default Tabbar;
