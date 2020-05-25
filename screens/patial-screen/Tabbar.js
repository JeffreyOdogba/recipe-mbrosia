import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Summary from "./Summary";
import Ingredients from "./Ingredients";
import Procedure from "./Procedure";

const Tabbar = (props) => {
  const [index, setIndex] = useState("1");

  onChangeIndex = (text) => {
    setIndex(text);
  };
  return (
    <View style={styles.menuContainer}>
      <View style={styles.tabcontent}>
        <View
          style={[
            styles.tab,
            index === "1" ? styles.selectedIndex : styles.unselectedIndex,
          ]}
        >
          <TouchableOpacity onPress={() => onChangeIndex("1")}>
            <Text style={styles.tabText}>Summary</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.tab,
            index === "2" ? styles.selectedIndex : styles.unselectedIndex,
          ]}
        >
          <TouchableOpacity onPress={() => onChangeIndex("2")}>
            <Text style={styles.tabText}>Ingredients </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.tab,
            index === "3" ? styles.selectedIndex : styles.unselectedIndex,
          ]}
        >
          <TouchableOpacity onPress={() => onChangeIndex("3")}>
            <Text style={styles.tabText}>Procedure</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {index === "1" && <Summary navigation={props.navigation} />}
        {index === "2" && <Ingredients navigation={props.navigation} />}
        {index === "3" && <Procedure navigation={props.navigation} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#dedede",
    width: 130,
    height: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    flexDirection: "column",
  },
  selectedIndex: {
    backgroundColor: "red",
    borderRadius: 5,
    color: "white",
  },
  unselectedIndex: {
    color: "black",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabcontent: {
    flexDirection: "row",
  },
  content: {
    paddingTop: 20,
  },
});

export default Tabbar;
