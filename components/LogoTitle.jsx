import React from "react";
import { Image, Text, View } from "react-native";

export function LogoTitle() {
  return (
      <View style={{  alignItems: "center", flex: 1 }}>
        
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>Welcome to Marv<Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/avengers-logo.png")}
        />pp</Text>
      </View>

  );
}
