import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Modal } from "react-native";

const ModalActivityIndicator = (props) => {
  const {
    show = false,
    color = "black",
    backgroundColor = "white",
    dimLights = 0.6,
    loadingMessage = "Creating your account 😎",
  } = props;
  return (
    <Modal transparent={true} animationType="none" visible={show}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: `rgba(0,0,0,${dimLights})`,
        }}
      >
        <View
          style={{
            padding: 13,
            backgroundColor: `${backgroundColor}`,
            borderRadius: 13,
          }}
        >
          <ActivityIndicator animating={show} color={color} size="large" />
          <Text style={{ color: `${color}` }}>{loadingMessage}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalActivityIndicator;
