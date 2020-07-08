import React, { useEffect, useState, useContext } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Picker,
  PickerIOS,
} from "react-native";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import ModalActivityIndicator from "./patial-screen/ModelActivityIndicator";

import { AuthContext } from "../context/auth/authContext";

function SignUpForm() {
  const [accountType, setAccountType] = useState("Watcher");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mbrosia, The Sauce to the heart</Text>
      </View>

      <View>
        <Text style={{ fontSize: 20, color: "red" }}>{error}</Text>
      </View>
      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullname}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        keyboardType={"email-address"}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.optionsContainer}>
        <Picker
          mode="dropdown"
          itemStyle={{
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
          accountType={accountType}
          style={styles.options}
          onValueChange={(itemValue, itemIndex) => setAccountType(itemValue)}
        >
          <Picker.Item label="Watcher" value="Watcher" />
          <Picker.Item label="Creator" value="Creator" />
        </Picker>
      </View>
      <TouchableOpacity
        onPress={() =>
          signUp({
            fullname,
            username,
            password,
            email,
            accountType,
          })
        }
      >
        <View style={styles.button}>
          <Text title="Sign Up" style={styles.buttonText}>
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
