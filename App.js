import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { LogoTitle } from "./components/LogoTitle";



const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#313131",
          },
          headerTitle: () => <LogoTitle />,
        }}
        />
        <Stack.Screen name="Detail" component={Detail}
        options={{
          headerStyle: {
            backgroundColor: "#313131",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

