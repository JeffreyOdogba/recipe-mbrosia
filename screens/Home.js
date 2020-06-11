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
import { AuthContext } from "../components/context";

const Home = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoutBtn}>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}
        >
          <AntDesign name="login" size={30} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text>Home</Text>
      </View>

      <View style={styles.footer}>
        <FooterMenu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  contentContainer: {
    flex: 1,
  },
  logoutBtn: {
    alignItems: "flex-end",
    marginRight: 5,
  },
});

export default Home;
