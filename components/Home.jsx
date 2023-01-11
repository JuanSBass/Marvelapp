import * as React from 'react'
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CharacterCard from './CharacterCard';

const Home = () => {
  return (
    <ScrollView>
      <Text>Aqui es el Home</Text>
      <CharacterCard 
      image={require("../assets/BlackWidow.png")}
      name="BlackWidow"
      />
      <CharacterCard 
      image={require("../assets/Captain.png")}
      name="Captain"
      />
    </ScrollView>
  )
}

export default Home
