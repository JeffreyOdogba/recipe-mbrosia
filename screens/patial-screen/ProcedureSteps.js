import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

const ProcedureSteps = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepContent}>
        <TextInput
          style={styles.stylesText}
          multiline={true}
          numberOfLines={1}
          value={props.Textvalue}
          placeholder={`Enter Procedure Steps ${props.step}`}
          onChangeText={(text) => {
            props.onChangeText(text);
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  stepContent: {},
  stepTitle: {
    fontSize: 23,
  },
  stylesText: {
    borderBottomWidth: 2,
    borderColor: "red",
    fontSize: 21,
  },
});
export default ProcedureSteps;
