import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import FooterMenu from "./patial-screen/FooterMenu";
import Tabbar from "./patial-screen/Tabbar";

// let ScreenHeight = Dimensions.get("window").height;

const CreateRecipe = ({ navigation }) => {
  const statusColor = () => {
    var v = "";
    if (Platform.OS === "ios") {
      return (v = "dark-content");
    }
    if (Platform.OS === "android") {
      return (v = "light-content");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle={statusColor()} />
      <View style={styles.body}>
        <View style={styles.profileImage}>
          <MaterialCommunityIcons name="face-profile" size={40} color="black" />
        </View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Create Recipe</Text>
        </View>

        <View style={styles.tab}>
          <Tabbar navigation={navigation} />
        </View>

        {/* <View style={styles.t}></View>
      <View style={styles.c}></View> */}
      </View>

      <View style={styles.footer}>
        <FooterMenu navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
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
    flex: 1,
  },
  header: {},
  profileImage: {
    alignItems: "flex-end",
  },
  textHeader: {
    fontSize: 34,
    fontWeight: "bold",
  },
  t: {
    flex: 30,
    backgroundColor: "green",
  },
  c: {
    flex: 20,
    backgroundColor: "gray",
  },
  tab: {
    flex: 1,
  },
  footer: {},
});

export default CreateRecipe;
