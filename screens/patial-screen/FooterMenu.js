import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import Constants from "expo-constants";

function FooterMenu(props) {
  function handleCreateRecipe() {
    props.navigation.navigate("CreateRecipe");
  }
  function handleHome() {
    props.navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={handleHome}>
          <AntDesign name="home" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chef-hat" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateRecipe}>
          <SimpleLineIcons name="note" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name="search" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-notifications-outline" size={32} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderColor: "#cfcfcf",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default FooterMenu;
