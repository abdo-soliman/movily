import Axios from "axios";
import React, { Component } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Alert, Image, Form, Button, Pagination } from "react-bootstrap";

import env from "../env";
import '../styles/SearchPage.css';
import apiRoutes from "../core/routes";

import MovieCard from "../components/MovieCard";

export default class MoviesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            numPages: 1,
            currentPage: 1,
            pages: [],
            errors: [],
            movies: []
        }
    }

    search = (event, page=1) => {
        if (event)
            event.preventDefault();

        let searchParams = {
            api_key: env.tmdbApiKey,
            query: this.state.query,
            include_adult: false,
            page: page
        };

        Axios.get(`${env.tmdbApiBaseUrl}${apiRoutes.search.movies}`, { params: searchParams })
            .then((response) => {
                let { results, total_pages } = response.data;
                this.setState({ movies: results, numPages: total_pages, currentPage: page });
            })
            .catch((error) => {
                let errors = [];
                try {
                    errors = error.response.data.errors;
                    this.setState({ errors: errors });
                }
                catch (err) {
                    errors = [error.message];
                    this.setState({ errors: errors });
                }
            });
    }

    dismisError = (idx) => {
        let errors = this.state.errors;
        errors.splice(idx, 1);
        this.setState({ errors: errors });
    };

    renderPagination = () => {
        let pages = [];
        for (let i = 1; i <= this.state.numPages; i++)
            pages.push(i);

        if (this.state.numPages <= 5)
            return pages.map((page) => {
                return (
                    <Pagination.Item
                        onClick={() => this.search(null, page)}
                        active={this.state.currentPage === page}
                    >
                        {page}
                    </Pagination.Item>
                );
            });

        return pages.map((page) => {
            if (page <= 2 || page >= this.state.numPages-1 || this.state.currentPage === page)
                return (
                    <Pagination.Item
                        onClick={() => this.search(null, page)}
                        active={this.state.currentPage === page}
                    >
                        {page}
                    </Pagination.Item>
                );

            if (page === 3 || page === this.state.numPages-2)
                return (
                    <Pagination.Ellipsis disabled/>
                );

            return null;
        });
    }

    render() {
        return (
            <Container>
                {(this.state.errors.length > 0) ?
                    this.state.errors.map((error, idx) => {
                        return (
                            <Alert
                                key={idx}
                                variant="danger"
                                style={{ marginBottom: 20 }}
                                onClose={() => this.dismisError(idx)}
                                dismissible
                            >
                                {error}
                            </Alert>
                        );
                    })
                    :
                    null
                }

                <div className="logo-container">
                    <Row>
                        <Col xs={4} md={5}></Col>
                        <Col xs={4} md={2}>
                            <Image src={require("../assets/logo.png")} className="logo" />
                        </Col>
                        <Col xs={4} md={5}></Col>
                    </Row>

                    <Row className="brand-row">
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <p className="brand-name">Movily</p>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>

                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <p className="slogan">Find you movies now</p>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </div>

                <Form className="form" onSubmit={this.search}>
                    <Form.Group as={Row}>
                        <Col xs={1} md={2}></Col>
                        <Col xs={10} md={8}>
                            <div className="search-cotainer">
                                <Form.Control
                                    name="query"
                                    type="text"
                                    placeholder="Movie Query"
                                    className="search-input"
                                    onChange={(event) => this.setState({ query: event.target.value })}
                                />
                                <Button type="submit" className="search-button">
                                    <FontAwesomeIcon icon={faSearch} color="#ed0015" />
                                </Button>
                            </div>
                        </Col>
                        <Col xs={1} md={2}></Col>
                    </Form.Group>
                </Form>

                {(this.state.numPages > 1) ?
                    <Pagination className="top-pagination">
                        <Pagination.First onClick={() => this.search(null, 1)} disabled={this.state.currentPage === 1}/>
                        <Pagination.Prev onClick={() => this.search(null, this.state.currentPage-1)} disabled={this.state.currentPage === 1}/>

                        {this.renderPagination()}

                        <Pagination.Next onClick={() => this.search(null, this.state.currentPage+1)} disabled={this.state.currentPage === this.state.numPages}/>
                        <Pagination.Last onClick={() => this.search(null, this.state.numPages)} disabled={this.state.currentPage === this.state.numPages}/>
                    </Pagination>
                    :
                    null
                }

                {(this.state.movies.length > 0) ?
                    this.state.movies.map((movie, idx) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                last={idx === this.state.movies.length - 1}
                                paginated={this.state.numPages === 1}
                            />
                        );
                    })
                    :
                    null
                }

                {(this.state.numPages > 1) ?
                    <Pagination className="bottom-pagination">
                        <Pagination.First onClick={() => this.search(null, 1)} disabled={this.state.currentPage === 1}/>
                        <Pagination.Prev onClick={() => this.search(null, this.state.currentPage-1)} disabled={this.state.currentPage === 1}/>

                        {this.renderPagination()}

                        <Pagination.Next onClick={() => this.search(null, this.state.currentPage+1)} disabled={this.state.currentPage === this.state.numPages}/>
                        <Pagination.Last onClick={() => this.search(null, this.state.numPages)} disabled={this.state.currentPage === this.state.numPages}/>
                    </Pagination>
                    :
                    null
                }
            </Container>
        );
    }
}
