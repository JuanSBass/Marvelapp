import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialComunityIcons from "react-native-vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import Information from "./Information";
import Comics from "./Comics";
import apiParams from "../configAPI";
import axios from "axios";
import { ActivityIndicator } from "react-native";

const Tab = createBottomTabNavigator();

const Detail = ({ route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

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

  console.log("detail", data.name);

  return (
    <Tab.Navigator
      initialRouteName="Information"
      screenOptions={{
        activeTintColor: "darkred",
      }}
    >
      <Tab.Screen
        name="Information"
        options={{
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
            <ActivityIndicator size="large" color="00ff00" />
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
          isLoading ? <ActivityIndicator size={large} color="#00ff00" /> 
          : <Comics 
          listComics={data?.comics?.items}
          />
        }

      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Detail;
