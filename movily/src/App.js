import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import TvPage from "./pages/TvPage";
import MoviesPage from "./pages/MoviesPage";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="body">
                    <NavBar />
                    <Switch>
                        <Route path="/movies">
                            <MoviesPage />
                        </Route>

                        <Route path="/tv">
                            <TvPage />
                        </Route>

                        <Route path="/">
                            <MoviesPage />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}
