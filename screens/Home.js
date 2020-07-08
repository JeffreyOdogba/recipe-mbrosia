import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import FooterMenu from "./patial-screen/FooterMenu";
import { AntDesign } from "@expo/vector-icons";
import AuthContext from "../context/auth/authContext";
import Recipe from "../components/Recipe";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoutBtn}>
        <TouchableOpacity
          onPress={async () => {
            await logout();
          }}
        >
          <AntDesign name="login" size={30} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text>Home</Text>
      </View>
      <Recipe />

      {/* <View style={styles.footer}>
        <FooterMenu navigation={navigation} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  contentContainer: {
    flex: 50,
    backgroundColor: "pink",
  },
  logoutBtn: {
    alignItems: "flex-end",
    marginRight: 5,
  },
});

export default Home;
