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

const Summary = (props) => {
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
              numberOfLines={2}
              placeholder="Recipe Name 🧐"
              style={styles.recipeText}
              value={recipeTitle}
              onChangeText={(text) => setRecipeTitle(text)}
            />
          </View>
          <View style={styles.summary}>
            <TextInput
              multiline={true}
              numberOfLines={2}
              placeholder="Summary 📃"
              style={styles.summaryText}
              value={summary}
              onChangeText={(text) => setSummary(text)}
            />
          </View>
        </View>

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

        <View style={styles.uploadContainer}>
          <View style={styles.plusIconContainer}>
            <Ionicons name="ios-add-circle" size={50} color="red" />
            <Text style={styles.uploadText}>Upload Image</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onHandleContinue}>
          <View style={styles.contiuneBtn}>
            <Text style={styles.contiuneText}>Save</Text>
          </View>
        </TouchableOpacity>
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
    borderColor: "red",
  },
  summaryText: {
    borderBottomWidth: 2,
    borderColor: "red",
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
});

export default Summary;
