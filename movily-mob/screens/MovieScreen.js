import React, { Component } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Background from "../components/Background";

export default class MovieScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: 50,
            currentPage: 1,
            movies: [
                {
                    popularity: 193.938,
                    vote_count: 729,
                    video: false,
                    poster_path: "/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
                    id: 317442,
                    adult: false,
                    backdrop_path: "/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg",
                    original_language: "ja",
                    original_title: "The Last: Naruto the Movie",
                    genre_ids: [
                        28,
                        16,
                        10749
                    ],
                    title: "The Last: Naruto the Movie",
                    vote_average: 7.9,
                    overview: "Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.",
                    release_date: "2014-12-06"
                },
                {
                    popularity: 193.938,
                    vote_count: 729,
                    video: false,
                    poster_path: "/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
                    id: 317441,
                    adult: false,
                    backdrop_path: "/l8ubUlfzlB5R2j9cJ3CN7tj0gmd.jpg",
                    original_language: "ja",
                    original_title: "The Last: Naruto the Movie",
                    genre_ids: [
                        28,
                        16,
                        10749
                    ],
                    title: "The Last: Naruto the Movie",
                    vote_average: 7.9,
                    overview: "Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact. Amidst this crisis, a direct descendant of Kaguya Otsutsuki named Toneri Otsutsuki attempts to kidnap Hinata Hyuga but ends up abducting her younger sister Hanabi. Naruto and his allies now mount a rescue mission before finding themselves embroiled in a final battle to decide the fate of everything.",
                    release_date: "2014-12-06"
                }
            ]
        }
    }

    render () {
        return (
            <Background>
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
                        />
                        <TouchableOpacity style={styles.formButton}>
                            <Ionicons name="ios-search" size={20} color="#ed0015" />
                        </TouchableOpacity>
                    </View>

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
