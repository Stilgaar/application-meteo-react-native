import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';


export default function Splash() {
    return (

        <View style={styles.containerContainer}>
            <View style={styles.container}>
                <Text>Bienvenue sur l'app trop de dingue</Text>
                <Text>Ca donne la météo !</Text>
                <Text>Et ya des couleurs</Text>
                <Text>Et voilà ....</Text>
            </View>
            <Image style={styles.tinyLogo} source={{ uri: `https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600,c_limit/weather.jpg` }} />
        </View>
    )
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
        fontWeight: 'bold',
        padding: 20,
        backgroundColor: '#F7F5A0',
    },

    tinyLogo: {
        borderWidth: 3,
        borderRadius: 5,
        marginTop: 20,
        height: 110,
        width: 200,

    }
}
)
