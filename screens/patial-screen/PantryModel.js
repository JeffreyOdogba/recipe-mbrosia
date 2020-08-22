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
  Modal,
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
import CategoryModel from "./CategoryModel";

const PantryModel = (props) => {
  const [photo, setImage] = useState(null);
  const [modelVisible, setModelVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Dessert");

  const [state, setState] = useState({
    pantryTitle: "",
    pantryDescription: "",
    selectedValue: "Dessert",
    ingredients: [],
    procedures: [],
    photo: {},
  });

  const [query, setQuery] = useState();
  const [queryP, setQueryP] = useState();

  const addIngredientHandle = () => {
    setState({ ...state, ingredients: [...state.ingredients, query] });
    setQuery("");
  };

  const addProcedureHandle = () => {
    setState({ ...state, procedures: [...state.procedures, queryP] });

    setQueryP("");
  };

  console.log("----Ing----");
  console.log(state.procedures);

  const removeIngredientItem = (index) => {
    const newList = state.ingredients.filter((item) => item !== index);
    //console.log(newList);

    setState({ ...state, ingredients: newList });
  };
  const removeProcedureItem = (index) => {
    const newList = state.procedures.filter((item) => item !== index);
    //console.log(newList);

    setState({ ...state, procedures: newList });
  };

  const removeItem = (image) => {
    //const newList = photo.filter((item) => item !== image);
    setImage(null);
    // props.onChangeImage(photo);
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
        // props.onChangeImage(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveImage = () => {
    AsyncStorage.setItem("Pantryimage", JSON.stringify(photo));
    //console.log(photo.uri);
    // props.onChangeImage(photo);
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

  useEffect(() => {
    //console.log(props.photo);
    getPermissionAsync();

    // console.log(props.submit);
    // if (props.submit) {
    //   AsyncStorage.removeItem("image")
    //     .then((value) => {
    //       if (value !== null) {
    //         const arrayValue = JSON.parse(value);
    //         setImage(arrayValue);
    //         // props.onChangeImage(arrayValue);
    //       }
    //     })
    //     .done();
    // }

    AsyncStorage.getItem("Pantryimage")
      .then((value) => {
        if (value !== null) {
          const arrayValue = JSON.parse(value);
          setImage(arrayValue);
          //   props.onChangeImage(arrayValue);
        }
      })
      .done();

    try {
    } catch (error) {}
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin: 10, marginTop: -20 }}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.uploadContainer}>
            <View style={styles.plusIconContainer}>
              <TouchableOpacity onPress={pickImage}>
                <Ionicons name="ios-camera" size={50} color="red" />
              </TouchableOpacity>

              <View style={styles.imageFixCont}>
                {photo && (
                  <View>
                    <TouchableOpacity onPress={() => removeItem(photo)}>
                      <Image
                        source={{ uri: photo.uri }}
                        style={styles.imageFix}
                      />
                      <MaterialIcons
                        name="cancel"
                        style={{ position: "absolute", bottom: 35, left: 35 }}
                        size={28}
                        color="red"
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <TouchableOpacity onPress={saveImage}>
              <Text style={styles.uploadText}>Upload Image</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.td}>
            <TextInput
              placeholder="Title"
              style={styles.title}
              onChangeText={(text) => setState({ ...state, pantryTitle: text })}
            />
            <TextInput
              placeholder="Description"
              numberOfLines={2}
              multiline={true}
              style={[styles.desc]}
              onChangeText={(text) =>
                setState({ ...state, pantryDescription: text })
              }
            />
          </View>

          <View style={styles.cate}>
            <TouchableOpacity
              onPress={() => {
                setModelVisible(true);
              }}
            >
              <Text style={styles.cT}>Select Category:</Text>
              <Text style={styles.sT}>{selectedValue}</Text>
            </TouchableOpacity>

            <View style={styles.ingS}>
              <TextInput
                style={styles.sT}
                placeholder="Enter Ingredient"
                value={query}
                onChangeText={(text) => {
                  setQuery(text);
                }}
              />
              <TouchableOpacity onPress={addIngredientHandle}>
                <Ionicons name="ios-add-circle" size={40} color="red" />
              </TouchableOpacity>
            </View>

            {state.ingredients &&
              state.ingredients.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => removeIngredientItem(item)}
                >
                  <View style={styles.items} key={i}>
                    <Text style={styles.itemText} key={i}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}

            <View style={styles.ingS}>
              <TextInput
                style={styles.sT}
                placeholder="Enter Procedures"
                value={queryP}
                onChangeText={(text) => {
                  setQueryP(text);
                }}
              />
              <TouchableOpacity onPress={addProcedureHandle}>
                <Ionicons name="ios-add-circle" size={40} color="red" />
              </TouchableOpacity>
            </View>

            {state.procedures &&
              state.procedures.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => removeProcedureItem(item)}
                >
                  <View style={styles.items} key={i}>
                    <Text style={styles.itemTextP} key={i}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
          <View style={styles.saveBtnCon}>
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveTxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <CategoryModel
          modelVisible={modelVisible}
          modelVisibleSet={setModelVisible}
          pickerSetter={setSelectedValue}
          pickerSelected={selectedValue}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
  saveBtnCon: {
    flexShrink: 1,
    justifyContent: "flex-end",
    marginTop: 100,
  },
  saveBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b33939",
    height: 50,
    borderRadius: 10,
  },
  saveTxt: {
    fontSize: 22,
    fontWeight: "bold",
  },
  ingS: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cate: {
    flex: 1,
    marginTop: 15,
  },
  cT: {
    fontSize: 20,
    color: "#aaa69d",
  },
  sT: {
    fontSize: 20,
    color: "black",
  },
  title: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#e77f67",
  },
  desc: {
    fontSize: 20,
  },
  uploadContainer: {
    justifyContent: "center",
    borderRadius: 13,
    height: 120,
    width: 130,
    margin: 10,
    flexShrink: 1,
  },
  plusIconContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  uploadText: {
    fontSize: 20,
    color: "red",
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
  items: {
    marginBottom: 5,
  },
  itemText: {
    borderRadius: 5,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#e77f67",
    backgroundColor: "#ff5e57",
  },
  itemTextP: {
    borderRadius: 5,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#e77f67",
    backgroundColor: "#f19066",
  },
});

export default PantryModel;
