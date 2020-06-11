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

const ProcedureSteps = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepContent}>
        <TextInput
          style={styles.stylesText}
          multiline={true}
          numberOfLines={1}
          placeholder={`Enter Procedure Steps ${props.step}`}
        ></TextInput>
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
