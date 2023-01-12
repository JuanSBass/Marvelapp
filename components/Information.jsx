import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Infomation = ({image, name, description}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={{uri: image}}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.font}>{description}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",

  },

  title: {
    fontSize: 22
  },

  font: {
    color: "#542516",
    fontSize: 16,
    textAlign: "justify",
    paddingHorizontal: 20
  },

  imagen: {
    width: 300,
    height: "60%",
    borderRadius: 10,
  },
});

export default Infomation;