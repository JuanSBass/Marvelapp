import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialComunityIcons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import Information from "./Information";
import Comics from "./Comics";

const Tab = createBottomTabNavigator();

const Detail = () => {
  return (
    <Tab.Navigator
      initialRouteName="Information"
      tabBarOptions={{
        activeTintColor: "darkred",
      }}
    >
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialComunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen 
      name="Comics"
      component={Comics}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialComunityIcons 
          name="book"
          color={color}
          size={size}
          />
        )
      }}
      />
    </Tab.Navigator>
  );
};

export default Detail;
