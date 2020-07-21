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
import FooterMenu from "./patial-screen/FooterMenu";
import Tabbar from "./patial-screen/Tabbar";

// let ScreenHeight = Dimensions.get("window").height;

const CreateRecipe = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.body}>
            <View style={styles.profileImage}>
              <MaterialCommunityIcons
                name="face-profile"
                size={40}
                color="black"
              />
            </View>
            <View style={styles.header}>
              <Text style={styles.textHeader}>Create Recipe</Text>
            </View>

            <View style={styles.tab}>
              <Tabbar navigation={navigation} />
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* <View style={styles.footer}>
          <FooterMenu navigation={navigation} />
        </View> */}
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
    justifyContent: "flex-end",
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
