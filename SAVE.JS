<View style={styles.container3}>
  <Text> 5 days Forecast</Text>
</View>
<View style={styles.container}>
  <View style={styles.boite1}>
    <Text>T° Today {data?.list[0].main.temp} </Text>
    <Text>C'est plutôt {data?.list[0].weather[0].description} </Text>
    <Text>T° Max : {data?.list[0].main.temp_max} / T° Min : {data?.list[0].main.temp_min}</Text>
    <Text> Wind {data?.list[0].wind.speed} m/s</Text>
  </View>
  <View style={styles.boite2}>
    <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}.png` }} />
  </View>
</View>
<View style={styles.container2}>
  <View style={styles.boite1}>
    <Text>T° J + 1 : {data?.list[8].main.temp}. </Text>
    <Text>C'est plutôt plutôt {data?.list[10].weather[0].description}</Text>
    <Text>T° Max : {data?.list[8].main.temp_max} / T° Min : {data?.list[1].main.temp_min}</Text>
    <Text> wind {data?.list[8].wind.speed}</Text>
  </View>
  <View style={styles.boite2}>
    <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list[8].weather[0].icon}.png` }} />
  </View>
</View>
<View style={styles.container}>
  <View style={styles.boite1}>
    <Text>T° J + 2 : {data?.list[16].main.temp}. </Text>
    <Text>C'est plutôt {data?.list[16].weather[0].description}</Text>
    <Text>T° Max : {data?.list[16].main.temp_max} / T° Min : {data?.list[2].main.temp_min}</Text>
    <Text> wind {data?.list[16].wind.speed}</Text>
  </View>
  <View style={styles.boite2}>
    <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list[2].weather[0].icon}.png` }} />
  </View>
</View>
<View style={styles.container2}>
  <View style={styles.boite1}>
    <Text>T° J + 3 : {data?.list[24].main.temp}. </Text>
    <Text>C'est plutôt {data?.list[24].weather[0].description}</Text>
    <Text>T° Max : {data?.list[24].main.temp_max} T° Min : {data?.list[3].main.temp_min}</Text>
    <Text> wind {data?.list[24].wind.speed}</Text>
  </View>
  <View style={styles.boite2}>
    <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list[24].weather[0].icon}.png` }} />
  </View>
</View>
<View style={styles.container}>
  <View style={styles.boite1}>
    <Text>T° J + 4 : {data?.list[32].main.temp}.</Text>
    <Text> C'est plutôt {data?.list[32].weather[0].description}</Text>
    <Text>T° Max : {data?.list[32].main.temp_max} / T° Min : {data?.list[4].main.temp_min}</Text>
    <Text> wind {data?.list[32].wind.speed}</Text>
  </View>
  <View style={styles.boite2}>
    <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list[32].weather[0].icon}.png` }} />
  </View>
</View>
<View style={styles.container2}>
  <View style={styles.boite1}>
    <Text>T° J + 5 : {data?.list[39].main.temp}. </Text>
    <Text> C'est plutôt {data?.list[39].weather[0].description}</Text>
    <Text>T° Max : {data?.list[39].main.temp_max} / T° Min : {data?.list[5].main.temp_min}</Text>
    <Text> wind {data?.list[39].wind.speed}</Text>
  </View>
  <View style={styles.boite2}>
    <Image style={styles.tinyLogo} source={{ uri: `http://openweathermap.org/img/wn/${data?.list[39].weather[0].icon}.png` }} />
  </View>
</View>
<StatusBar style="auto" />








































































