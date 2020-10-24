import * as React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.footerImageContainer}>
                <Image source={require("../assets/the_moviedb_logo.png")} style={styles.footerImage} />
            </View>

            <View style={styles.footerTextContainer}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 10 }}>
                    <Text style={styles.footerText}>This product uses the TMDb API but is not endorsed or certified by TMDb.</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 100,
        backgroundColor: "#fdf2dc",
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    footerImageContainer: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    footerImage: {
        width: "70%",
        resizeMode: "contain"
    },
    footerTextContainer: {
        width: "100%",
        flexDirection: "row"
    },
    footerText: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold"
    }
});

export default Footer;
