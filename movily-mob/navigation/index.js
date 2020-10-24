import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTabs from "./MainTabs";

const MainNavigator = (props) => {
    return (
        <NavigationContainer>
            <MainTabs />
        </NavigationContainer>
    );
};

export default MainNavigator;
