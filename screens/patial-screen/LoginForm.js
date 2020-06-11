import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { AuthContext } from "../../components/context";

const LoginDialog = (props) => {
  //const { register, setValue, handleSubmit, errors } = useForm();

  const [username, setUsername] = useState("Jeff");
  const [password, setPassword] = useState("LOL");

  const { signIn } = useContext(AuthContext);

  const loginHandler = (username, password) => {
    signIn(username, password);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={props.closemodel}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mbrosia, Will Show You How!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => {
          signIn(username, password);
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>L O G I N</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
