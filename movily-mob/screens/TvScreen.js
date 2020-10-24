import React, { Component } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Background from "../components/Background";

export default class TvScreen extends Component {
    render () {
        return (
            <Background>
                <View style={styles.container}>
                    <View style={styles.formLogoContainer}>
                        <Image source={require("../assets/logo-round.png")} style={styles.formLogo} />
                    </View>

                    <Text style={styles.slogan}>Find your tv shows now</Text>

                    <View style={styles.form}>
                        <TextInput
                            placeholder="Tv Query"
                            placeholderTextColor="#393838"
                            returnKeyType="done"
                            style={styles.formInput}
                        />
                        <TouchableOpacity style={styles.formButton}>
                            <Ionicons name="ios-search" size={20} color="#ed0015" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Background>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        marginTop: 20,
        alignItems: "center",
        alignSelf: "center"
    },
    formLogoContainer: {
        width: "40%",
        height: 125,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 20
    },
    formLogo: {
        width: "100%",
        resizeMode: "contain"
    },
    title: {
        fontFamily: "FvAlmelo",
        fontWeight: "bold",
        fontSize: 30,
        color: "#ed0015",
        marginBottom: 10,
    },
    slogan: {
        fontFamily: "GrandHotel",
        fontSize: 30,
        color: "#ed0015",
        marginBottom: 20,
    },
    form: {
        flexDirection: "row",
        width: "100%",
        height: 55,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
    },
    formInput: {
        flex: 8,
        width: "100%",
        height: "100%",
        textAlign: "center",
        padding: 15,
        borderRightColor: "#ccc",
        borderRightWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    formButton: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#fdf2dc",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
});
