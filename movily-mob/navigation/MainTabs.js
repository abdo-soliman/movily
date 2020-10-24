import React from "react";
import { Feather, Fontisto } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TvScreen from "../screens/TvScreen";
import MovieScreen from "../screens/MovieScreen";

const Tab = createMaterialTopTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#ed0015",
                inactiveTintColor: "gray",
                activeBackgroundColor: "#fdf2dc",
                inactiveBackgroundColor: "#fdf2dc",
                style: { height: 90 },
                tabStyle: {
                    paddingTop: 35,
                    backgroundColor: "#fdf2dc",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center"
                },
                labelStyle: { fontFamily: "FvAlmelo", textAlign: "center", alignSelf: "center" },
                showIcon: true
            }}
        >
            <Tab.Screen
                name="movies"
                component={MovieScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Fontisto
                            name="film"
                            size={20}
                            style={{ color: color, alignSelf: "center" }}
                        />
                    ),
                    title: "movies",
                }}
            />

            <Tab.Screen
                name="tv"
                component={TvScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Feather
                            name="tv"
                            size={20}
                            style={{ color: color, alignSelf: "center" }}
                        />
                    ),
                    title: "TV",
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabs;
