import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import LoginDialog from "./patial-screen/LoginForm";
const welcome_1 = require("../assets/welcome_1.jpg");

function WelcomeScreen({ navigation }) {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <ImageBackground source={welcome_1} style={styles.background}>
      <View>
        <Text style={styles.header}>
          <Text>Welcome to </Text>
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
            Mbrosia Recipe
          </Text>
        </Text>
      </View>

      <View style={styles.loginBtn}>
        <Button title="Login" onPress={toggleModal} />
        <Modal isVisible={visible} onBackdropPress={() => setVisible(false)}>
          <LoginDialog closemodel={toggleModal} />
        </Modal>
      </View>

      <View style={styles.signupBtn}>
        <TouchableOpacity>
          <Text
            style={styles.signUplink}
            onPress={() => {
              navigation.navigate("SignUpForm");
            }}
          >
            S I G N U P
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    paddingTop: 65,
    color: "white",
  },
  loginBtn: {
    position: "absolute",
    bottom: 90,
    width: 270,
  },
  signupBtn: {
    position: "absolute",
    bottom: 60,
    width: 270,
    alignItems: "center",
  },
  signUplink: {
    color: "white",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
