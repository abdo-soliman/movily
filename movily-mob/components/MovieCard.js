import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

import env from "../env";
import { MovieGenreById, TvGenreById } from "../core/utils";

export default class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: ""
        }
    }

    componentDidMount() {
        this.getGenres(this.props.movie.genre_ids, this.props.type).then((result) => this.setState({ genres: result }));
    }

    getGenres = async (genres, type) => {
        let result = "";
        for (let i = 0; i < genres.length; i++) {
            if (i === 0)
                result = (type === "movie") ? await MovieGenreById(genres[i]) : TvGenreById(genres[i]);
            else
                result = `${result}, ${(type === "movie") ? await MovieGenreById(genres[i]) : TvGenreById(genres[i])}`;
        }
    
        return result;
    };

    render() {
        return (
            <View style={(!this.props.paginated && this.props.last) ? styles.lastMovieContainer : styles.container }>
                <Image source={{ uri: `${env.tmdbImageBaseUrl}${this.props.movie.poster_path}` }} style={styles.poster} />

                <Text style={styles.movieTitle}>
                    { (this.props.type === "movie") ? this.props.movie.title : this.props.movie.name}
                </Text>

                <Text style={styles.movieGenre}>
                    Genres: {this.state.genres}
                </Text>

                <Text style={styles.movieOverview}>
                    {this.props.movie.overview}
                </Text>

                {!this.props.last && <View style={styles.separator}></View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 30,
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
    },
    lastMovieContainer: {
        alignItems: "center",
        marginBottom: 120,
        width: "100%"
    },
    poster: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginBottom: 15,
    },
    movieTitle: {
        fontFamily: "FvAlmelo",
        fontSize: 30,
        textAlign: "left",
        marginBottom: 10,
        alignSelf: "flex-start"
    },
    movieGenre: {
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginBottom: 15,
    },
    movieOverview: {
        textAlign: "justify",
        alignSelf: "flex-start"
    },
    separator: {
        width: "100%",
        backgroundColor: "#000",
        marginTop: 25,
        height: 1
    }
});
