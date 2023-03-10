import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialComunityIcons from "react-native-vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import Information from "./Information";
import Comics from "./Comics";
import apiParams from "../configAPI";
import axios from "axios";
import { ActivityIndicator, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const Detail = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;
  const navigation = useNavigation();
  const goHome = () => navigation.goBack();

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters/${route.params.id}`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results[0]))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Information"
      screenOptions={{
        activeTintColor: "darkred",
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <Button title="HOME" color="#000" onPress={goHome} />
          </View>
        ),
      }}
    >
      <Tab.Screen
        name="Information"
        options={{
          // title: `${data.name}`,
          tabBarIcon: ({ color, size }) => (
            <MaterialComunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <Information
              image={`${data?.thumbnail?.path}.${data?.thumbnail.extension}`}
              name={data?.name}
              description={data?.description}
            />
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name="Comics"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialComunityIcons name="book" color={color} size={size} />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size={large} color="#000" />
          ) : (
            <Comics listComics={data?.comics?.items} />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Detail;
