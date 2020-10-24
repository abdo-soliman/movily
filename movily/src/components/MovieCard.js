import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

import "../styles/MovieCard.css";

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
            <Row className={`${(!this.props.paginated && this.props.last)? "last-movie-container" : "movie-container"}`}>
                <Row>
                    <Col md={5}>
                        <Image src={`${env.tmdbImageBaseUrl}${this.props.movie.poster_path}`} className="poster" />
                    </Col>
                    <Col md={7}>
                        <Row>
                            <p className="movie-title">
                                { (this.props.type === "movie") ? this.props.movie.title : this.props.movie.name}
                            </p>
                        </Row>
                        <Row>
                            <p className="movie-genre">
                                Genres: {this.state.genres}
                            </p>
                        </Row>
                        <Row>
                            <p className="movie-overview">
                                {this.props.movie.overview}
                            </p>
                        </Row>
                    </Col>
                </Row>
                {!this.props.last && <div className="separator"></div>}
            </Row>
        );
    }
}
