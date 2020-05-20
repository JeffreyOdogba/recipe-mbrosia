import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Picker,
  PickerIOS,
} from "react-native";
import { useForm } from "react-hook-form";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";

function SignUpForm(props) {
  const [selectedValue, setSelectedValue] = useState("Watcher");
  const { register, setValue, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.warn(data);

  useEffect(() => {
    register({ name: "fullname" }, { required: true });
    register({ name: "email" }, { required: true });
    register({ name: "username" }, { required: true });
    register({ name: "password" }, { required: true });
    register({ name: "accountType" }, { required: true });
  }, [register]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mbrosia, The Sauce to the heart</Text>
      </View>

      <TextInput
        placeholder="Full Name"
        ref={register}
        style={styles.input}
        onChange={(text) => setValue("fullname", text)}
      />
      <TextInput
        placeholder="Email"
        ref={register}
        style={styles.input}
        onChange={(text) => setValue("email", text)}
      />
      <TextInput
        placeholder="Username"
        ref={register}
        style={styles.input}
        onChange={(text) => setValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        ref={register}
        style={styles.input}
        onChange={(text) => setValue("password", text)}
      />

      <View style={styles.optionsContainer}>
        <Picker
          mode="dropdown"
          itemStyle={{
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
          selectedValue={selectedValue}
          style={styles.options}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Watcher" value="Watcher" />
          <Picker.Item label="Creator" value="Creator" />
        </Picker>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text
            title="Sign Up"
            style={styles.buttonText}
            onPress={handleSubmit(onSubmit)}
          >
            S I G N U P
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {},
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  options: {
    color: "black",
    backgroundColor: "white",
    padding: 10,
    margin: 20,
  },
  header: {
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    color: "white",
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
    height: 50,
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
});

export default SignUpForm;
