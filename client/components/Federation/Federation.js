import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const Federation = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.google}
            >
                <Text style={styles.googleText}>Sign In With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facebook}
            >

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    google: {
        marginLeft: 10,
        width: '45%',
        height: '3rem',
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    facebook: {
        marginLeft: 10,
        width: '45%',
        height: '3rem',
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    }
})

export default Federation