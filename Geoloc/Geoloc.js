import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function app() {

  const [data, setData] = useState([]);
  const [coordonnees, setCoordonnees] = useState();
  let lat = coordonnees?.coords.latitude
  let lon = coordonnees?.coords.longitude

  React.useEffect(() => {
    Geolocation.getCurrentPosition((position) => setCoordonnees(position))
  }, [])

  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=69d32ecf48102dfe7b7344901bf4d47e&lang=fr`)
      .then((res) => { return res.json() }).then((json) => { setData(json) }).catch((error) => { console.error(error) })
  }, [lat, lon])

  function pickColor() {
    if (data?.list?.[0]?.main?.temp < 0) { return '#0DF9EA'; }
    else if (data?.list?.[0]?.main?.temp > 0 && data?.list?.[0]?.main?.temp < 5) { return '#51FFF4'; }
    else if (data?.list?.[0]?.main?.temp > 5 && data?.list?.[0]?.main?.temp < 10) { return '#7DE4EC'; }
    else if (data?.list?.[0]?.main?.temp > 10 && data?.list?.[0]?.main?.temp < 15) { return '#D6E8EC'; }
    else if (data?.list?.[0]?.main?.temp > 15 && data?.list?.[0]?.main?.temp < 20) { return '#F7F5A0'; }
    else if (data?.list?.[0]?.main?.temp > 20 && data?.list?.[0]?.main?.temp < 25) { return '#F7CBA0'; }
    else if (data?.list?.[0]?.main?.temp > 25) { return '#F49E84'; } }

  function pickColor8() {
    if (data?.list?.[8]?.main?.temp < 0) { return '#0DF9EA'; }
    else if (data?.list?.[8]?.main?.temp > 0 && data?.list?.[8]?.main?.temp < 5) { return '#51FFF4'; }
    else if (data?.list?.[8]?.main?.temp > 5 && data?.list?.[8]?.main?.temp < 10) { return '#7DE4EC'; }
    else if (data?.list?.[8]?.main?.temp > 10 && data?.list?.[8]?.main?.temp < 15) { return '#D6E8EC'; }
    else if (data?.list?.[8]?.main?.temp > 15 && data?.list?.[8]?.main?.temp < 20) { return '#F7F5A0'; }
    else if (data?.list?.[8]?.main?.temp > 20 && data?.list?.[8]?.main?.temp < 25) { return '#F7CBA0'; }
    else if (data?.list?.[8]?.main?.temp > 25) { return '#F49E84';} }

  function pickColor16() {
    if (data?.list?.[16]?.main?.temp < 0) { return '#0DF9EA'; }
    else if (data?.list?.[16]?.main?.temp > 0 && data?.list?.[16]?.main?.temp < 5) { return '#51FFF4'; }
    else if (data?.list?.[16]?.main?.temp > 5 && data?.list?.[16]?.main?.temp < 10) { return '#7DE4EC'; }
    else if (data?.list?.[16]?.main?.temp > 10 && data?.list?.[16]?.main?.temp < 15) { return '#D6E8EC'; }
    else if (data?.list?.[16]?.main?.temp > 15 && data?.list?.[16]?.main?.temp < 20) { return '#F7F5A0'; }
    else if (data?.list?.[16]?.main?.temp > 20 && data?.list?.[16]?.main?.temp < 25) { return '#F7CBA0'; }
    else if (data?.list?.[16]?.main?.temp > 25) { return '#F49E84'; }}

  function pickColor24() {
    if (data?.list?.[24]?.main?.temp < 0) { return '#0DF9EA'; }
    else if (data?.list?.[24]?.main?.temp > 0 && data?.list?.[24]?.main?.temp < 5) { return '#51FFF4'; }
    else if (data?.list?.[24]?.main?.temp > 5 && data?.list?.[24]?.main?.temp < 10) { return '#7DE4EC'; }
    else if (data?.list?.[24]?.main?.temp > 10 && data?.list?.[24]?.main?.temp < 15) { return '#D6E8EC'; }
    else if (data?.list?.[24]?.main?.temp > 15 && data?.list?.[24]?.main?.temp < 20) { return '#F7F5A0'; }
    else if (data?.list?.[24]?.main?.temp > 20 && data?.list?.[24]?.main?.temp < 25) { return '##F49E84'; }
    else if (data?.list?.[24]?.main?.temp > 25) { return '#F49E84'; } }

  function pickColor32() {
    if (data?.list?.[32]?.main?.temp < 0) { return '#0DF9EA'; }
    else if (data?.list?.[32]?.main?.temp > 0 && data?.list?.[32]?.main?.temp < 5) { return '#51FFF4'; }
    else if (data?.list?.[32]?.main?.temp > 5 && data?.list?.[32]?.main?.temp < 10) { return '#7DE4EC'; }
    else if (data?.list?.[32]?.main?.temp > 10 && data?.list?.[32]?.main?.temp < 15) { return '#D6E8EC'; }
    else if (data?.list?.[32]?.main?.temp > 15 && data?.list?.[32]?.main?.temp < 20) { return '#F7F5A0'; }
    else if (data?.list?.[32]?.main?.temp > 20 && data?.list?.[32]?.main?.temp < 25) { return '#F7CBA0'; }
    else if (data?.list?.[32]?.main?.temp > 25) { return '#F49E84'; } }

  function pickColor39() {
    if (data?.list?.[39]?.main?.temp < 0) { return '#0DF9EA'; }
    else if (data?.list?.[39]?.main?.temp > 0 && data?.list?.[39]?.main?.temp < 5) { return '#51FFF4'; }
    else if (data?.list?.[39]?.main?.temp > 5 && data?.list?.[39]?.main?.temp < 10) { return '#7DE4EC'; }
    else if (data?.list?.[39]?.main?.temp > 10 && data?.list?.[39]?.main?.temp < 15) { return '#D6E8EC'; }
    else if (data?.list?.[39]?.main?.temp > 15 && data?.list?.[39]?.main?.temp < 20) { return '#F7F5A0'; }
    else if (data?.list?.[39]?.main?.temp > 20 && data?.list?.[39]?.main?.temp < 25) { return '#F7CBA0'; }
    else if (data?.list?.[39]?.main?.temp > 25) { return '#F49E84'; } }

  return (
    <ScrollView horizontal={true} style={styles.scroll}>
      <View style={styles.container3}>
        <Text style={styles.gras}>Five <br /> Days  <br /> Forcast  <br /> Weather.<br /> <br />  City : <br /> {data?.city?.name} </Text>
      </View>

      <View style={styles.containerContainer}>
        <View style={[styles.container, { backgroundColor: pickColor() }]}>
          <View style={styles.boite1}>
            <Text style={styles.gras}> {data?.list?.[0]?.dt_txt}</Text>
            <Text><Text style={styles.gras}> T° Today : </Text> {data?.list?.[0]?.main?.temp} </Text>
            <Text><Text style={styles.gras}> Plutôt : </Text>{data?.list?.[0]?.weather?.[0]?.description} </Text>
            <Text><Text style={styles.gras}> T° Max : </Text>{data?.list?.[0]?.main?.temp_max}</Text>
            <Text><Text style={styles.gras}>T° Min : </Text> {data?.list?.[0]?.main?.temp_min}</Text>
            <Text><Text style={styles.gras}>  Wind : </Text>{data?.list?.[0]?.wind?.speed} m/s</Text>
          </View>
          <View style={styles.boite2}>
            <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list?.[0]?.weather?.[0]?.icon}.png` }} />
          </View>
        </View>

        <View style={[styles.container, { backgroundColor: pickColor8() }]}>
          <View style={styles.boite1}>
            <Text style={styles.gras}> {data?.list?.[8]?.dt_txt}</Text>
            <Text><Text style={styles.gras}>T° This Day : </Text>{data?.list?.[8]?.main?.temp} </Text>
            <Text><Text style={styles.gras}>Plutôt : </Text>{data?.list?.[8]?.weather?.[0]?.description} </Text>
            <Text><Text style={styles.gras}>T° Max : </Text>{data?.list?.[8]?.main?.temp_max}</Text>
            <Text><Text style={styles.gras}> T° Min : </Text>{data?.list?.[8]?.main?.temp_min}</Text>
            <Text><Text style={styles.gras}> Wind : </Text>{data?.list?.[8]?.wind?.speed} m/s</Text>
          </View>
          <View style={styles.boite2}>
            <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list?.[8]?.weather?.[0]?.icon}.png` }} />
          </View>
        </View>


        <View style={[styles.container, { backgroundColor: pickColor16() }]}>
          <View style={styles.boite1}>
            <Text style={styles.gras}> {data?.list?.[16]?.dt_txt}</Text>
            <Text><Text style={styles.gras}>T° This Day : </Text>{data?.list?.[16]?.main?.temp} </Text>
            <Text><Text style={styles.gras}>Plutôt : </Text>{data?.list?.[16]?.weather?.[0]?.description} </Text>
            <Text><Text style={styles.gras}>T° Max : </Text>{data?.list?.[16]?.main?.temp_max}</Text>
            <Text><Text style={styles.gras}> T° Min : </Text>{data?.list?.[16]?.main?.temp_min}</Text>
            <Text><Text style={styles.gras}>Wind : </Text>{data?.list?.[16]?.wind?.speed} m/s</Text>
          </View>
          <View style={styles.boite2}>
            <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list?.[16]?.weather?.[0]?.icon}.png` }} />
          </View>
        </View>

        <View style={[styles.container, { backgroundColor: pickColor24() }]}>
          <View style={styles.boite1}>
            <Text style={styles.gras}> {data?.list?.[24]?.dt_txt}</Text>
            <Text><Text style={styles.gras}>T° This Day : </Text>{data?.list?.[24]?.main?.temp} </Text>
            <Text><Text style={styles.gras}>Plutôt : </Text>{data?.list?.[24]?.weather?.[0]?.description} </Text>
            <Text><Text style={styles.gras}>T° Max : </Text>{data?.list?.[24]?.main?.temp_max}</Text>
            <Text><Text style={styles.gras}> T° Min : </Text>{data?.list?.[24]?.main?.temp_min}</Text>
            <Text><Text style={styles.gras}> Wind : </Text>{data?.list?.[24]?.wind?.speed} m/s</Text>
          </View>
          <View style={styles.boite2}>
            <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list?.[24]?.weather?.[0]?.icon}.png` }} />
          </View>
        </View>

        <View style={[styles.container, { backgroundColor: pickColor32() }]}>
          <View style={styles.boite1}>
            <Text style={styles.gras}> {data?.list?.[32]?.dt_txt}</Text>
            <Text><Text style={styles.gras}>T° This Day : </Text>{data?.list?.[32]?.main?.temp} </Text>
            <Text><Text style={styles.gras}>Plutôt : </Text>{data?.list?.[32]?.weather?.[32]?.description} </Text>
            <Text><Text style={styles.gras}>T° Max : </Text>{data?.list?.[32]?.main?.temp_max}</Text>
            <Text><Text style={styles.gras}> T° Min : </Text>{data?.list?.[32]?.main?.temp_min}</Text>
            <Text><Text style={styles.gras}> Wind : </Text>{data?.list?.[32]?.wind?.speed} m/s</Text>
          </View>
          <View style={styles.boite2}>
            <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list?.[32]?.weather?.[0]?.icon}.png` }} />
          </View>
        </View>

        <View style={[styles.container, { backgroundColor: pickColor39() }]}>
          <View style={styles.boite1}>
            <Text style={styles.gras}> {data?.list?.[39]?.dt_txt}</Text>
            <Text><Text style={styles.gras}>T° This Day : </Text>{data?.list?.[39]?.main?.temp} </Text>
            <Text><Text style={styles.gras}>Plutôt : </Text>{data?.list?.[39]?.weather?.[39]?.description} </Text>
            <Text><Text style={styles.gras}>T° Max : </Text>{data?.list?.[39]?.main?.temp_max}</Text>
            <Text><Text style={styles.gras}> T° Min : </Text>{data?.list?.[39]?.main?.temp_min}</Text>
            <Text><Text style={styles.gras}>Wind : </Text>{data?.list?.[39]?.wind?.speed} m/s</Text>
          </View>
          <View style={styles.boite2}>
            <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list?.[39]?.weather?.[0]?.icon}.png` }} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  containerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1C9CF6',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', },

  container: {
    height: '100%',
    textAlign: 'left',
    borderWidth: 2,
    marginHorizontal: 3,
    borderRadius: 3,
    padding: 6,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center', },

  container3: {
    borderWidth: 2,
    backgroundColor: '#FFCD00',
    borderRadius: 3,
    padding: 3,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center' },

  tinyLogo: {
    borderWidth: 7,
    borderColor: '#1C9CF6',
    borderRadius: 3,
    backgroundColor: 'lightblue',
    marginVertical: 3,
    width: 120,
    height: 120,
    marginTop:20,},

  gras: {
    fontWeight: 'bolder', },
});
