import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import RecipeContext from "../../context/recipes/recipeContext";

const Summary = (props) => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [servingCount, setServingCount] = useState();
  const [cookingCount, setCookingCount] = useState();

  // const [state, setState] = useState({
  //   recipeTitle: "",
  //   summary: "",
  //   servingCount: 0,
  //   cookingCount: 0,
  // });

  const { summaryData } = useContext(RecipeContext);

  const saveBtn = () => {
    try {
      summaryData(recipeTitle, summary, servingCount, cookingCount);
    } catch (error) {
      // Error saving data
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("recipeTitle")
      .then((value) => {
        if (value !== null) {
          setRecipeTitle(value);
        }
      })
      .done();

    AsyncStorage.getItem("summary")
      .then((value) => {
        if (value !== null) {
          setSummary(value);
        }
      })
      .done();

    AsyncStorage.getItem("serveCounter")
      .then((value) => {
        //const val = parseInt(value, 10);
        if (value !== null) {
          setServingCount(value);
        }
      })
      .done();

    AsyncStorage.getItem("cookCounter")
      .then((value) => {
        if (value !== null) {
          setCookingCount(value, 10);
        }
      })
      .done();
  }, []);

  const onHandleContinue = () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.recipe}>
            <TextInput
              autoCapitalize="words"
              editable={true}
              numberOfLines={2}
              placeholder="Recipe Name 🧐"
              style={styles.recipeText}
              value={recipeTitle}
              onChangeText={(text) => {
                setRecipeTitle(text);
                AsyncStorage.setItem("recipeTitle", text);
              }}
            />
          </View>
          <View style={styles.summary}>
            <TextInput
              multiline={true}
              numberOfLines={2}
              placeholder="Summary 📃"
              style={styles.summaryText}
              value={summary}
              onChangeText={(text) => {
                setSummary(text);
                AsyncStorage.setItem("summary", text);
              }}
            />
          </View>
        </View>

        <View style={styles.sc}>
          <View style={styles.servings}>
            <Text style={styles.servingstext}>Servings/People: </Text>
            <TextInput
              style={styles.servingInput}
              placeholder="Number"
              keyboardType={"numeric"}
              numeric
              value={servingCount}
              onChangeText={(text) => {
                setServingCount(text);
                AsyncStorage.setItem("serveCounter", text);
              }}
            />
          </View>

          <View style={styles.cooking}>
            <Text style={styles.servingstext}>Cooking time/Min: </Text>
            <TextInput
              style={styles.servingInput}
              placeholder="Number"
              keyboardType={"numeric"}
              numeric
              value={cookingCount}
              onChangeText={(text) => {
                setCookingCount(text);
                AsyncStorage.setItem("cookCounter", text);
              }}
            />
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <View style={styles.plusIconContainer}>
            <Ionicons name="ios-add-circle" size={50} color="red" />
            <Text style={styles.uploadText}>Upload Image</Text>
          </View>
        </View>

        <View style={styles.addBtn}>
          <TouchableOpacity onPress={saveBtn}>
            <Entypo name="save" size={50} color="red" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  recipe: {
    marginVertical: 10,
    justifyContent: "flex-end",
    ...Platform.select({
      android: {
        flex: 5,
      },
      ios: {
        flex: 5,
      },
    }),
  },
  recipeText: {
    borderBottomWidth: 2,
    fontSize: 29,
    borderColor: "#e77f67",
  },
  summaryText: {
    borderBottomWidth: 2,
    borderColor: "#e77f67",
    fontSize: 29,
  },
  summary: {
    justifyContent: "flex-end",
    ...Platform.select({
      ios: {
        flex: 5,
      },
      android: {
        flex: 5,
      },
    }),
  },
  sc: {
    flex: 0.34,
    marginVertical: 19,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  servings: {
    borderBottomWidth: 2,
    borderColor: "#e77f67",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servingInput: {
    fontSize: 23,
  },

  servingsalign: {
    flexDirection: "row",
    alignItems: "center",
  },
  servingstext: {
    fontSize: 23,
  },
  cooking: {
    fontSize: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iValue: {
    right: 16,
  },
  value: {
    color: "red",
    fontWeight: "bold",
    fontSize: 23,
  },

  uploadContainer: {
    flex: 0.9,
    marginVertical: 10,
    backgroundColor: "#edd0ce",
    borderRadius: 13,
  },
  plusIconContainer: {
    margin: 19,
  },
  uploadText: {
    fontSize: 20,
    color: "red",
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
  addBtn: {
    alignItems: "flex-end",
    shadowOpacity: 1.0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowRadius: 3,
  },
});

export default Summary;
