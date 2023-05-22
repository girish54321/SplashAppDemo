import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = () => {
    const [splashImage, setSplashImage] = useState("");
    const [toggleSplash, settoggleSplash] = useState(true);

    useEffect(() => {
        fetchSplashImage();
        setTimeout(() => {
            settoggleSplash(false)
        }, 5000);
    }, []);

    const fetchSplashImage = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users/1');
            const data = await response.json();
            setSplashImage(data.data.avatar);
        } catch (error) {
            console.error(error);
        }
    };

    if (!toggleSplash) return (
        <View style={{ flex: 1, }}>
            <Text style={{ fontSize: 46 }}>React Native</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FastImage
                source={{ uri: splashImage }}
                style={styles.image}
                resizeMode={FastImage.resizeMode.stretch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: windowWidth,
        height: windowHeight
    },
});

export default SplashScreen;
