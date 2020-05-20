import Modal from "react-native-modal";
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
import { useForm } from "react-hook-form";
import Constants from "expo-constants";

function LoginDialog(props) {
  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = (data) => Alert.alert("Form Data", JSON.stringify(data));

  useEffect(() => {
    register({ name: "username" }, { required: true });
    register({ name: "password" });
  }, [register]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={props.closemodel}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mbrosia, Will Show You How!</Text>
      </View>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChange={(text) => setValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChange={(text) => setValue("password", text)}
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>S I G N U P</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  close: {
    backgroundColor: "#ec5990",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    top: 0,
    right: 0,
    margin: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#ec5990",
    height: 50,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 5,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    margin: 20,
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
});

export default LoginDialog;
