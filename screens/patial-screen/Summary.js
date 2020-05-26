import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

let ScreenHeight = Dimensions.get("window").height;

const Summary = () => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [servingCount, setServingCount] = useState(1);
  const [cookingCount, setCookingCount] = useState(1);

  const subServingCounter = () => {
    setServingCount(servingCount - 1);
  };
  const addServingCounter = () => {
    setServingCount(servingCount + 1);
  };
  const subCookingCounter = () => {
    setCookingCount(cookingCount - 1);
  };
  const addCookingCounter = () => {
    setCookingCount(cookingCount + 1);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {/* Forms Tab */}
      <View style={styles.formStyle}>
        <View style={styles.recipe}>
          <TextInput
            autoCapitalize="words"
            numberOfLines={2}
            placeholder="Recipe Name 🧐"
            style={styles.recipeText}
            value={recipeTitle}
            onChangeText={(text) => setRecipeTitle(text)}
          />
        </View>

        <View style={styles.summary}>
          <ScrollView style={{ flex: 1 }}>
            <TextInput
              multiline={true}
              numberOfLines={2}
              placeholder="Summary 📃"
              style={styles.summaryText}
              value={summary}
              onChangeText={(text) => setSummary(text)}
            />
          </ScrollView>
        </View>
      </View>

      {/* Servering Tab */}
      <View style={styles.sc}>
        <View style={styles.servings}>
          <Text style={styles.servingstext}>Servings/People: </Text>
          <View style={styles.servingsalign}>
            <View style={styles.iValue}>
              <Text style={styles.value}>{servingCount}</Text>
            </View>

            <TouchableOpacity onPress={subServingCounter}>
              <View style={styles.subh}>
                <Text style={styles.sub}>-</Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.sub}>|</Text>
            <TouchableOpacity onPress={addServingCounter}>
              <View style={styles.subh}>
                <Text style={styles.sub}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cooking Tab */}
        <View style={styles.cooking}>
          <Text style={styles.servingstext}>Cooking time/Min: </Text>
          <View style={styles.servingsalign}>
            <View style={styles.iValue}>
              <Text style={styles.value}>{cookingCount}</Text>
            </View>

            <TouchableOpacity onPress={subCookingCounter}>
              <View style={styles.subh}>
                <Text style={styles.sub}>-</Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.sub}>|</Text>
            <TouchableOpacity onPress={addCookingCounter}>
              <View style={styles.subh}>
                <Text style={styles.sub}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Upload Image Tab */}
      <View style={styles.uploadContainer}>
        <View style={styles.plusIconContainer}>
          <Ionicons name="ios-add-circle" size={40} color="red" />
          <Text style={styles.uploadText}>Upload Image</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.contiuneBtn}>
            <Text style={styles.contiuneText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formStyle: {
    flex: 0.3,
  },
  recipe: {
    ...Platform.select({
      android: {},
      ios: {
        top: 12,
      },
    }),
  },
  recipeText: {
    borderBottomWidth: 2,
    fontSize: 24,
    borderColor: "red",
  },

  summaryText: {
    borderBottomWidth: 2,
    borderColor: "red",
    fontSize: 24,
  },
  summary: {
    flex: 0.55,
    ...Platform.select({
      ios: {
        top: 40,
      },
      android: {
        top: 30,
      },
    }),
  },
  sc: {
    flex: 0.2,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  servings: {
    borderBottomWidth: 2,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  subh: {
    width: wp("14%"),
    height: hp("5"),
    backgroundColor: "#dedede",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  sub: {
    fontSize: 29,
    fontWeight: "bold",
  },
  uploadContainer: {
    flex: 0.29,
    backgroundColor: "#edd0ce",
    borderRadius: 13,
    justifyContent: "space-between",
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
    alignItems: "center",
    height: hp("7.4"),
    borderRadius: 13,
    top: 90,

    // ...Platform.select({
    //   ios: {},
    //   android: {},
    // }),
  },
  contiuneText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Summary;
