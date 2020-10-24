import * as React from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const renderPagination = (numPages, currentPage, onClick) => {
    let pages = [];
    for (let i = 1; i <= numPages; i++)
        pages.push(i);

    if (numPages <= 5)
    
        return pages.map((page) => {
            return (
                <TouchableOpacity
                    style={[styles.button, (currentPage === page) ? styles.active : null]}
                    onPress={() => onClick(page)}
                >
                    <Text style={(currentPage === page) ? { color: "white" } : { color: "blue" }}>{page}</Text>
                </TouchableOpacity>
            );
        });

    return pages.map((page) => {
        if (page <= 2 || page >= numPages-1 || currentPage === page)
            return (
                <TouchableOpacity
                    style={[styles.button, (currentPage === page) ? styles.active : null]}
                    onPress={() => onClick(page)}
                >
                    <Text style={(currentPage === page) ? { color: "white" } : { color: "blue" }}>{page}</Text>
                </TouchableOpacity>
            );

        if (page === 3 || page === numPages-2)
            return (
                <TouchableOpacity style={styles.button} disabled>
                    <Text style={{ color: "#000" }}>...</Text>
                </TouchableOpacity>
            );

        return null;
    });
}

const Pagination = ({ numPages, currentPage, onClick, position }) => {
    return (
        <View style={[styles.container, (position === "top") ? { marginBottom: 20 } : { marginBottom: 120 } ]}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onClick(1)}
                disabled={currentPage === 1}
            >
                <Feather name="chevrons-left" size={15} color={(currentPage === 1) ? "#CCC" : "blue"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onClick(currentPage-1)}
                disabled={currentPage === 1}
            >
                <Entypo name="chevron-left" size={15} color={(currentPage === 1) ? "#CCC" : "blue"} />
            </TouchableOpacity>

            {renderPagination(numPages, currentPage, onClick)}

            <TouchableOpacity
                style={styles.button}
                onPress={() => onClick(currentPage+1)}
                disabled={currentPage === numPages}
            >
                <Entypo name="chevron-right" size={15} color={(currentPage === numPages) ? "#CCC" : "blue"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onClick(numPages)}
                disabled={currentPage === numPages}
            >
                <Feather name="chevrons-right" size={15} color={(currentPage === numPages) ? "#CCC" : "blue"} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "90%",
        height: 30,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    active: {
        backgroundColor: "blue",
        borderRadius: 5
    }
});

export default Pagination;
