import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import PantryCard from "../components/PantryCard";
// let ScreenHeight = Dimensions.get("window").height;

const Pantry = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.profileImage}>
            <MaterialCommunityIcons
              name="face-profile"
              size={40}
              color="black"
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Pantry</Text>
        </View>
        <View style={styles.searchCon}>
          <Ionicons name="ios-search" size={23} color="#aaa69d"></Ionicons>
          <TextInput style={styles.search} placeholder="Search" />
        </View>

        <PantryCard navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Constants.statusBarHeight,
  },
  body: {
    justifyContent: "flex-end",
  },

  searchCon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dfe6e9",
    borderRadius: 8,
    margin: 5,
    paddingLeft: 8,
  },
  search: {
    color: "#2d3436",
    height: 40,
    padding: 10,
    fontSize: 18,
  },
  profileImage: {
    alignItems: "flex-end",
  },
  textHeader: {
    fontSize: 34,
    fontWeight: "bold",
  },
});

export default Pantry;
