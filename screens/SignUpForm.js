import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Picker,
} from "react-native";
import { useForm } from "react-hook-form";
import Constants from "expo-constants";

function SignUpForm(props) {
  const [selectedValue, setSelectedValue] = useState("Watcher");
  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = (data) => Alert.alert("Form Data", JSON.stringify(data));

  useEffect(() => {
    register({ name: "fullname" }, { required: true });
    register({ name: "email" }, { required: true });
    register({ name: "username" }, { required: true });
    register({ name: "password" }, { required: true });
    register({ name: "accountType" }, { required: true });
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Fullname</Text>
      <TextInput
        style={styles.input}
        onChange={(text) => setValue("fullname", text)}
      />
      <Text style={styles.label}> Email</Text>
      <TextInput
        style={styles.input}
        onChange={(text) => setValue("email", text)}
      />
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
      <Text style={styles.label}> Choose Account To Have</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Watcher" value="Watcher" />
        <Picker.Item label="Creator" value="Creator" />
      </Picker>

      <View style={styles.button}>
        <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      </View>
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

export default SignUpForm;
