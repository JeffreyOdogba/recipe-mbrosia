import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Summary from "./Summary";
import Ingredients from "./Ingredients";
import Procedure from "./Procedure";

const Tabbar = (props) => {
  const [index, setIndex] = useState("1");

  onChangeIndex = (text) => {
    setIndex(text);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tabcontent}>
        <TouchableOpacity onPress={() => onChangeIndex("1")}>
          <View
            style={[
              styles.tab,
              index === "1" ? styles.selectedIndex : styles.unselectedIndex,
            ]}
          >
            <Text style={styles.tabText}>Summary</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeIndex("2")}>
          <View
            style={[
              styles.tab,
              index === "2" ? styles.selectedIndex : styles.unselectedIndex,
            ]}
          >
            <Text style={styles.tabText}>Ingredients </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeIndex("3")}>
          <View
            style={[
              styles.tab,
              index === "3" ? styles.selectedIndex : styles.unselectedIndex,
            ]}
          >
            <Text style={styles.tabText}>Procedure</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* <View style={{ flex: 100, backgroundColor: "red" }}></View> */}

      <View style={styles.contentContainer}>
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
    width: wp("31.70%"),
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  menuContainer: {},
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
    flex: 9,
    justifyContent: "center",
    flexDirection: "row",
  },
  contentContainer: {
    flex: 100,
  },
});

export default Tabbar;
