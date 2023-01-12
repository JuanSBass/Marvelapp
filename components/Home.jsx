import * as React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CharacterCard from "./CharacterCard";
import apiParams from "../configAPI";
import axios from "axios";

const Home = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  React.useEffect(() => {
    axios
      .get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <CharacterCard
              id={item.id}
              image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
              name={item?.name}
            />
          )}
        />
      )}
    </ScrollView>
  );
};

export default Home;
