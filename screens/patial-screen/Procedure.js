import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, Entypo } from "@expo/vector-icons";
import ProcedureSteps from "./ProcedureSteps";
import AsyncStorage from "@react-native-community/async-storage";
import RecipeContext from "../../context/recipes/recipeContext";

const Procedure = () => {
  const [procedure, setProcedure] = useState([]);
  const [query, setQuery] = useState("");

  const { procedureData } = useContext(RecipeContext);

  const onSaveHandle = () => {
    try {
      AsyncStorage.setItem("procedure", JSON.stringify(procedure));
      procedureData({ procedure });
    } catch (error) {}
  };

  const addProcedureHandler = (query) => {
    if (query === "") {
      Alert.alert(" Oops! Cannot be Empty");
    } else {
      setProcedure([
        ...procedure,
        {
          id: procedure.length + 1,
          value: query,
        },
      ]);

      setQuery("");
    }
  };

  const seletedValued = (value, index) => {
    setQuery(value);
    const newList = procedure.filter((item) => item.id !== index);
    setProcedure(newList);
  };

  useEffect(() => {
    AsyncStorage.getItem("procedure")
      .then((value) => {
        if (value !== null) {
          const arrayValue = JSON.parse(value);
          setProcedure(arrayValue);
        }
      })
      .done();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentStep}>
          <TextInput
            style={styles.stylesText}
            multiline={true}
            numberOfLines={1}
            value={query}
            placeholder={`Enter Procedure Steps  `}
            onChangeText={(text) => {
              setQuery(text);
            }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          {procedure.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => seletedValued(item.value, item.id)}
            >
              <View style={styles.items} key={item.id}>
                <Text style={styles.itemText} key={item.id}>
                  {item.value}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {/* <TouchableOpacity onPress={onSaveHandle}>
          <View style={styles.contiuneBtn}>
            <Text style={styles.contiuneText}>Save</Text>
          </View>
        </TouchableOpacity> */}
      </ScrollView>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.addBtn}>
          <TouchableOpacity onPress={onSaveHandle}>
            <Entypo name="save" size={50} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.addBtn}>
          <TouchableOpacity
            onPress={() => {
              addProcedureHandler(query);
            }}
          >
            <Ionicons name="ios-add-circle" size={60} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    alignItems: "flex-end",
    shadowOpacity: 1.0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowRadius: 3,
  },
  scrollContainer: {
    flex: 1,
  },
  contentStep: {
    paddingTop: 28,
  },
  contiuneBtn: {
    backgroundColor: "red",
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
    height: hp("7.4"),
    borderRadius: 13,
  },
  contiuneText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  stylesText: {
    borderBottomWidth: 2,
    borderColor: "red",
    fontSize: 21,
  },
  items: {
    flexDirection: "row",
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
  },
});
export default Procedure;
