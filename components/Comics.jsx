import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import apiParams from "../configAPI";
import Comic from "./Comic";

const Comics = ({ listComics }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  useEffect(() => {
    const promisesArray = listComics.map((c) =>
      axios.get(c.resourceURI, {
        params: {
          ts,
          apikey,
          hash,
        },
      })
    );

    Promise.all(promisesArray)
      .then((responses) =>
        setData(responses.map((r) => r?.data?.data?.results[0]))
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{  flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          contentContainerStyle={{ alignItems: "center"}}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          horizontal
          pagingEnabled
          renderItem={({ item }) => (
            <Comic
              key={item.id}
              name={item.title}
              image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}
            />
          )}
        />
      )}
    </View>
  );
};

export default Comics;
