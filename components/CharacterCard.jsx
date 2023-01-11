import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const CharacterCard = ({ image, name }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => navigation.navigate("Detail")}
    >
        <Image style={styles.image} source={image} />
        <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  font: {
    color: "#542516",
  },
});

export default CharacterCard;
