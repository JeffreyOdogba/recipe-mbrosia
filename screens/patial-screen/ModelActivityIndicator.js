import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const ModalActivityIndicator = (props) => {
  const {
    color = "black",
    backgroundColor = "white",
    dimLights = 0.6,
    loadingMessage = "Creating your account 😎",
  } = props;

  if (!props.show) {
    return <View />;
  }
  return (
    <View style={styles.overlay}>
      <View
        style={{
          padding: 13,
          backgroundColor: `${backgroundColor}`,
          borderRadius: 13,
        }}
      >
        <ActivityIndicator color={color} size="large" />
        <Text style={{ color: `${color}` }}>{loadingMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModalActivityIndicator;
