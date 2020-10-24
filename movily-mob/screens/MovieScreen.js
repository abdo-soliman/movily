import Axios from "axios";
import * as Network from 'expo-network';
import React, { Component } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Alert, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import env from "../env";
import apiRoutes from "../core/routes";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Background from "../components/Background";
import LoadingModal from "../components/LoadingModal";

export default class MovieScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            numPages: 1,
            currentPage: 1,
            footerVisible: true,
            modalVisible: false,
            loadingMessage: "we are looking for your movie please wait",
            movies: []
        }
    }

    search = async (getPage=1) => {
        let networkOff = false;
        try {
            let networkState = await Network.getNetworkStateAsync();
            if (!(networkState.isConnected && networkState.isInternetReachable))
                networkOff = true;
        } catch (err) {
            networkOff = true;
        }

        if (networkOff) {
            Alert.alert(
                "Error",
                "Please Turn on you Cellular data connection or WIFI",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            );

            return false;
        }

        this.setState({ modalVisible: true });
        let searchParams = {
            api_key: env.tmdbApiKey,
            query: this.state.query,
            include_adult: false,
            page: getPage
        };

        Axios.get(`${env.tmdbApiBaseUrl}${apiRoutes.search.movies}`, { params: searchParams })
            .then((response) => {
                let { results, total_pages, page } = response.data;
                this.setState({ movies: results, numPages: total_pages, currentPage: page, modalVisible: false });
            })
            .catch((error) => {
                this.setState({ modalVisible: false });
                try {
                    error.response.data.errors.map((error) => {
                        Alert.alert(
                            "Error",
                            error,
                            [{text: "OK", onPress: () => {}}],
                        );
                    });
                }
                catch (err) {
                    Alert.alert(
                        "Error",
                        error.message,
                        [{text: "OK", onPress: () => {}}],
                    );
                }
            });
    }

    render () {
        return (
            <Background footerVisible={this.state.footerVisible}>
                <LoadingModal visible={this.state.modalVisible} message={this.state.loadingMessage}/>

                <View style={styles.container}>
                    <View style={styles.formLogoContainer}>
                        <Image source={require("../assets/logo-round.png")} style={styles.formLogo} />
                    </View>

                    <Text style={styles.slogan}>Find your movies now</Text>

                    <View style={styles.form}>
                        <TextInput
                            placeholder="Movie Query"
                            placeholderTextColor="#393838"
                            returnKeyType="done"
                            style={styles.formInput}
                            onFocus={() => this.setState({ footerVisible: false })}
                            onChangeText={query => this.setState({ query: query })}
                            onBlur={() => this.setState({ footerVisible: true })}
                        />
                        <TouchableOpacity style={styles.formButton} onPress={this.search}>
                            <Ionicons name="ios-search" size={20} color="#ed0015" />
                        </TouchableOpacity>
                    </View>

                    {(this.state.numPages > 1) ?
                        <Pagination
                            numPages={this.state.numPages}
                            currentPage={this.state.currentPage}
                            onClick={this.search}
                            position="top"
                        />
                        :
                        null
                    }

                    {(this.state.movies.length > 0) ?
                        this.state.movies.map((movie, idx) => {
                            return (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    type="movie"
                                    last={idx === this.state.movies.length - 1}
                                    paginated={this.state.numPages !== 1}
                                />
                            );
                        })
                        :
                        null
                    }

                    {(this.state.numPages > 1) ?
                        <Pagination
                            numPages={this.state.numPages}
                            currentPage={this.state.currentPage}
                            onClick={this.search}
                            position="bottom"
                        />
                        :
                        null
                    }
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
        marginBottom: 30,
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
