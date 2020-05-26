import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import FooterMenu from "./patial-screen/FooterMenu";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  contentContainer: {
    flex: 1,
  },
});

export default Home;
