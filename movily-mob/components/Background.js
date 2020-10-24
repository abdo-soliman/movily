import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Footer from "./Footer";

const Background = ({ children, footerVisible=true }) => (
    <View style={styles.background}>
        <ScrollView style={styles.container} behavior="padding">
            {children}
        </ScrollView>
        {footerVisible && <Footer />}
    </View>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%"
    },
    container: {
        width: "100%",
    }
});

export default Background;
