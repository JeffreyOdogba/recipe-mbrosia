import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

const Summary = (props) => {
  const [photo, setImage] = useState(null);

  const removeItem = (image) => {
    //const newList = photo.filter((item) => item !== image);
    setImage(null);
    props.onChangeImage(photo);
  };

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Allow access!");
      }
    }
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Allow access!");
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      if (!result.cancelled) {
        setImage(result);
        props.onChangeImage(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveImage = () => {
    AsyncStorage.setItem("image", JSON.stringify(photo));
    console.log(photo);
    props.onChangeImage(photo);
  };

  useEffect(() => {
    //console.log(props.photo);
    getPermissionAsync();

    console.log(props.submit);
    if (props.submit) {
      AsyncStorage.removeItem("image")
        .then((value) => {
          if (value !== null) {
            const arrayValue = JSON.parse(value);
            setImage(arrayValue);
            props.onChangeImage(arrayValue);
          }
        })
        .done();
    }

    AsyncStorage.getItem("image")
      .then((value) => {
        if (value !== null) {
          const arrayValue = JSON.parse(value);
          setImage(arrayValue);
          props.onChangeImage(arrayValue);
        }
      })
      .done();

    try {
    } catch (error) {}
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={styles.recipe}>
            <TextInput
              autoCapitalize="words"
              editable={true}
              numberOfLines={2}
              placeholder="Recipe Name"
              style={styles.recipeText}
              value={props.titleValue}
              onChangeText={(text) => {
                props.onChangeTitle(text);
              }}
            />
          </View>
          <View style={styles.summary}>
            <TextInput
              multiline={true}
              numberOfLines={2}
              placeholder="Summary"
              style={styles.summaryText}
              value={props.descriptionValue}
              onChangeText={(text) => {
                props.onChangeDescription(text);
              }}
            />
          </View>
        </View>

        <View style={styles.sc}>
          <View style={styles.servings}>
            <Text style={styles.servingstext}>Servings/People: </Text>
            <TextInput
              style={styles.servingInput}
              placeholder="Number"
              keyboardType={"numeric"}
              numeric
              value={props.servingValue}
              onChangeText={(text) => {
                props.onChangeServingCount(text);
              }}
            />
          </View>

          <View style={styles.cooking}>
            <Text style={styles.servingstext}>Cooking time/Min: </Text>
            <TextInput
              style={styles.servingInput}
              placeholder="Number"
              keyboardType={"numeric"}
              numeric
              value={props.cookingValue}
              onChangeText={(text) => {
                props.onChangeCookingCount(text);
              }}
            />
          </View>
        </View>

        <View style={styles.calorie}>
          <Text style={styles.servingstext}>Calories: </Text>
          <TextInput
            style={styles.servingInput}
            placeholder="Kcals"
            keyboardType={"numeric"}
            numeric
            value={props.kcalsValue}
            onChangeText={(text) => {
              props.onChangeCookingCount(text);
            }}
          />
        </View>

        <View style={styles.uploadContainer}>
          <View style={styles.plusIconContainer}>
            <TouchableOpacity onPress={pickImage}>
              <Ionicons name="ios-add-circle" size={50} color="red" />
            </TouchableOpacity>

            <View style={styles.imageFixCont}>
              {photo && (
                <View>
                  <TouchableOpacity onPress={() => removeItem(photo)}>
                    <MaterialIcons
                      name="cancel"
                      style={{}}
                      size={25}
                      color="red"
                    />
                  </TouchableOpacity>
                  <Image source={{ uri: photo.uri }} style={styles.imageFix} />
                </View>
              )}
            </View>
            <TouchableOpacity onPress={saveImage}>
              <Text style={styles.uploadText}>Upload Image</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.addBtn}>
          <TouchableOpacity onPress={saveBtn}>
            <Entypo name="save" size={50} color="red" />
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  recipe: {
    marginVertical: 10,
    ...Platform.select({
      android: {
        flex: 5,
      },
      ios: {
        flex: 5,
      },
    }),
  },
  recipeText: {
    borderBottomWidth: 2,
    fontSize: 29,
    borderColor: "#e77f67",
  },
  summaryText: {
    borderBottomWidth: 2,
    borderColor: "#e77f67",
    fontSize: 29,
  },
  summary: {
    ...Platform.select({
      ios: {
        flex: 5,
      },
      android: {
        flex: 5,
      },
    }),
  },
  sc: {
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  servings: {
    borderBottomWidth: 2,
    borderColor: "#e77f67",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servingInput: {
    fontSize: 23,
  },

  servingsalign: {
    flexDirection: "row",
    alignItems: "center",
  },
  servingstext: {
    fontSize: 23,
  },
  cooking: {
    fontSize: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  calorie: {
    paddingTop: 10,
    fontSize: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  uploadContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#edd0ce",
    borderRadius: 13,
  },
  plusIconContainer: {
    flex: 1,
    margin: 19,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  uploadText: {
    fontSize: 20,
    color: "red",
  },

  addBtn: {
    alignItems: "flex-end",
    shadowOpacity: 1.0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowRadius: 3,
  },
  imageFixCont: {
    flexDirection: "row",
  },
  imageFix: {
    width: 50,
    height: 50,
    margin: 5,
    flexShrink: 1,
  },
});

export default Summary;
