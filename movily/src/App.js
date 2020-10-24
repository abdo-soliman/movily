import React, { Component } from 'react';

import "./styles/App.css"

import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

export default class App extends Component {
    render() {
        return (
            <div className="body">
                <HomePage />
                <Footer />
            </div>
        );
    }
}
