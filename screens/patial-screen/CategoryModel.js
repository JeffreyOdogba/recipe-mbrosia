import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Picker,
} from "react-native";

const CategoryModel = (props) => {
  console.log(props.modelVisible);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modelVisible}
        onRequestClose={() => {
          props.modelVisibleSet(!props.modelVisible);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            props.modelVisibleSet(!props.modelVisible);
          }}
        >
          <View>
            <TouchableWithoutFeedback>
              <View style={styles.modelView}>
                <Text>Select a Pantry Category:</Text>
                <Picker
                  style={{ height: 50, width: 150 }}
                  selectedValue={props.pickerSelected}
                  onValueChange={(item, index) => {
                    props.pickerSetter(item);
                    props.modelVisibleSet(!props.modelVisible);
                  }}
                >
                  <Picker.Item label="Dessert" value="Dessert" />
                  <Picker.Item label="Pancake" value="Pancake" />
                  <Picker.Item label="Light Snack" value="Light Snack" />
                </Picker>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modelView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CategoryModel;
