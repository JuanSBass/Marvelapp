import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const Comic = ({ name, image }) => {
  return (
    <View style={styles.container}>
			<Image
				source={{uri: image}}
        style={styles.imagen}
			/>
			<Text style={styles.title}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",

  },

  title: {
    fontSize: 22,
    textAlign: "center",
    maxWidth: 320
  },

  imagen: {
    width: 320,
    height: 450,
    borderRadius: 10,
  },
});

export default Comic
