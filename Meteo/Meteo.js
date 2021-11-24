import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { getDrawerStatusFromState } from '@react-navigation/drawer';

export default function Meteo() {

  const [data, setData] = useState();
  const [ville, setVille] = useState("");

  function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=d229b2ac4c905285006369c2d6203876&lang=FR`)
      .then((res) => { return res.json() }).then((json) => { setData(json) }).catch((error) => { console.error(error) })
  }

  function onPressdata(ville) {
    setVille("");
    getData(ville);
  }

  function pickColor() {
    if (data?.main.temp < 0) { return '#0DF9EA'; }
    else if (data?.main.temp > 0 && data?.main.temp < 5) { return '#51FFF4'; }
    else if (data?.main.temp > 5 && data?.main.temp < 10) { return '#7DE4EC'; }
    else if (data?.main.temp > 10 && data?.main.temp < 15) { return '#D6E8EC'; }
    else if (data?.main.temp > 15 && data?.main.temp < 20) { return '#F7F5A0'; }
    else if (data?.main.temp > 20 && data?.main.temp < 25) { return '#F7CBA0'; }
    else if (data?.main.temp > 25) { return '#F49E84'; }
  }

  return (

    <View style={styles.containerContainer}>

      <View style={[styles.container, { backgroundColor: pickColor() }]}>
        <Text> L'appli Metéo COEUR COEUR</Text>
        <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.weather[0].icon}.png` }} />
        <Text> La météo de telle ville : {data?.name} </Text>
        <Text> En ce moment il fait : {data?.main.temp}</Text>
        <Text> vent souffle comme un malade à {data?.wind.speed}  m/s</Text>
        <Text> Soit : {data?.weather[0].description} cool non ? </Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setVille}
        value={ville}
        placeholder={"T'habites ou ? :wink:"} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressdata(ville)}>
        <Text>Va chercher ta ville</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  containerContainer: {
    flex: 1,
    backgroundColor: '#1C9CF6',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  container: {
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: '#F7F5A0',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'lightblue'
  },

  button: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
  }
});



















