import * as React from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingModal = ({ visible, message }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
                <ActivityIndicator color="green" size={30}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "80%",
        height: 150,
        top: 250,
        left: "10%",
        zIndex: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    message: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    }
});

export default LoadingModal;
