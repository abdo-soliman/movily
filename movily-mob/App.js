import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { Component } from 'react';

import MainNavigator from "./navigation";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    loadApp = async () => {
        await Font.loadAsync({
            FvAlmelo: require('./assets/fonts/fv_almelo-webfont.ttf'),
            GrandHotel: require('./assets/fonts/GrandHotel-Regular.otf'),
        });
    };

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this.loadApp}
                    onFinish={() => this.setState({ isReady: true })}
                />
            );
        }

        return (
            <MainNavigator />
        );
    }
}
