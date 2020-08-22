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

const Procedure = (props) => {
  const [procedure, setProcedure] = useState([]);
  const [query, setQuery] = useState("");

  const { procedureData } = useContext(RecipeContext);

  const publish = () => {
    props.publish();
  };
  const onSaveHandle = () => {
    try {
      AsyncStorage.setItem("procedure", JSON.stringify(procedure));
      props.onChangeProcedures(procedure);
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

    // if (props.submit) {
    //   AsyncStorage.removeItem("procedure")
    //     .then((value) => {
    //       if (value !== null) {
    //         const arrayValue = JSON.parse(value);
    //         setProcedure(arrayValue);
    //         // props.onChangeImage(arrayValue);
    //       }
    //     })
    //     .done();
    // }
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
              <View style={styles.items}>
                <Text style={styles.itemText}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.addBtn}>
          <TouchableOpacity onPress={onSaveHandle}>
            <Entypo name="save" size={50} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.publishCt}>
          <TouchableOpacity onPress={publish}>
            <Text style={styles.publishBtn}>Publish</Text>
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
  publishCt: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    height: 50,
  },
  publishBtn: {
    fontSize: 20,
    color: "white",
  },
});
export default Procedure;
