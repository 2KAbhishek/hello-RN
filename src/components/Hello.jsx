import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Wave from './Wave';
import WindowSize from './WindowSize';

const Hello = () => {
    return (
        <View style={styles.container}>
            <Wave style={styles.title} />
            <Text style={styles.text}>Hello Right Now! {"\n"}
                Oh no, I meant Hello React Native 😅
            </Text>
            <WindowSize
                style={styles.textSmall}/>
            <StatusBar barStyle='auto' />
        </View>
    );
};

var FONT_SIZE = 20;
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
FONT_SIZE = (SCREEN_WIDTH / 320) * FONT_SIZE;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: FONT_SIZE * 3,
        color: 'white',
        marginBottom: 100
    },
    text: {
        fontSize: FONT_SIZE,
        textAlign: 'center',
        margin: 10,
        lineHeight: FONT_SIZE * 1.5,
        color: '#1688f0'
    },
    textSmall: {
        fontSize: FONT_SIZE * 0.5,
        textAlign: 'center',
        marginTop: 30,
        color: 'silver',
        textDecorationLine: 'underline'
    }
});

export default Hello;
