import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Background from "../components/Background";

export default class TvScreen extends Component {
    render () {
        return (
            <Background>
                <View style={styles.container}>
                    <Text>TV Screen</Text>
                </View>
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        marginTop: 50,
        alignItems: "center",
        alignSelf: "center"
    },
});
