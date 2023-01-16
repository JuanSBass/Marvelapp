import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CharacterCard from "./CharacterCard";
import apiParams from "../configAPI";
import axios from "axios";
import { SearchBar } from "react-native-elements";

const Home = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
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

  const searchCharacter = () => {
    if (search) {
      // setLoading(true);
      axios
        .get(
          `${baseURL}/v1/public/characters?nameStartsWith=${search}&ts=${ts}&apikey=${apikey}&hash=${hash}`
        )
        .then((response) => setData(response.data.data.results))

        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          <SearchBar
            textAlign="center"
            textContentType="light"
            platform="android"
            placeholder="Searh your character"
            onChangeText={(value) => setSearch(value)}
            value={search}
            onKeyPress={searchCharacter}
            onSubmitEditing={searchCharacter}
          />
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
        </>
      )}
    </ScrollView>
  );
};

export default Home;
