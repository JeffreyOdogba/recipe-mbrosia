import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ProcedureSteps from "./ProcedureSteps";

const Procedure = () => {
  const [procedureCounter, setProcedureCounter] = useState([
    { id: 1, value: 1 },
  ]);

  const addProcedureHandler = () => {
    setProcedureCounter((procedureCounter) => [
      ...procedureCounter,
      {
        id: procedureCounter[procedureCounter.length - 1].id + 1,
        value: procedureCounter[procedureCounter.length - 1].value + 1,
      },
    ]);
    console.log(procedureCounter);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentStep}>
          {procedureCounter.map((item) => (
            <View style={{ marginVertical: 15 }} key={item.id}>
              <ProcedureSteps step={item.value} />
            </View>
          ))}
        </View>
        <TouchableOpacity>
          <View style={styles.contiuneBtn}>
            <Text style={styles.contiuneText}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.addBtn}>
        <TouchableOpacity onPress={addProcedureHandler}>
          <Ionicons name="ios-add-circle" size={60} color="red" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    alignItems: "flex-end",
    shadowOpacity: 1.0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowRadius: 3,
  },
  scrollContainer: {
    flex: 1,
  },
  contentStep: {
    paddingTop: 15,
  },
  contiuneBtn: {
    backgroundColor: "red",
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
    height: hp("7.4"),
    borderRadius: 13,
  },
  contiuneText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
export default Procedure;
