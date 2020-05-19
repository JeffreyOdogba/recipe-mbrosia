import Modal from "react-native-modal";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
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
      <Text style={styles.label}> Username</Text>
      <TextInput
        style={styles.input}
        onChange={(text) => setValue("username", text)}
      />
      <Text style={styles.label}> Password</Text>
      <TextInput
        style={styles.input}
        onChange={(text) => setValue("password", text)}
      />
      <View style={styles.button}>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
      <Button title="Cancel" onPress={props.closemodel} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    backgroundColor: "#ec5990",
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default LoginDialog;
