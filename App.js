import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Geoloc from './Geoloc/Geoloc'
import Meteo from './Meteo/Meteo'
import Splash from './Splash/Splash';

export default function app() {


  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Splash">
        <Drawer.Screen name="Splash" component={Splash} />
        <Drawer.Screen name="Geoloc" component={Geoloc} />
        <Drawer.Screen name="Meteo" component={Meteo} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({

  containerContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },

  container: {
    textAlign: 'left',
    width: 350,
    borderWidth: 2,
    backgroundColor: 'yellow',
    marginVertical: 1,
    borderRadius: 10,
    padding: 6,
    flex: 0.5,
    flexDirection: 'row',
  },

  container2: {
    padding: 6,
    textAlign: 'left',
    width: 350,
    borderWidth: 2,
    backgroundColor: 'orange',
    borderRadius: 10,
    flex: 0.5,
    flexDirection: 'row',
  },

  container3: {
    width: 350,
    borderWidth: 2,
    backgroundColor: 'lightyellow',
    marginVertical: 1,
    borderRadius: 10,
    padding: 6,
    textAlign: 'center',
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  boite2: {
    flex: 0.3,
    marginLeft: 60,
  },

  tinyLogo: {
    width: 60,
    height: 60,
  },
});