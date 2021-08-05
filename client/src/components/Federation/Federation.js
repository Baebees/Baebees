import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
const Federation = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.google}
            >
                <Image 
                style={{width: 32, height: 32}}
                source={require('../../../assets/icons/google.png')} />
                <Text style={styles.googleText}>Sign In With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facebook}
            >
                <Image 
                style={{width: 16, height: 32}}
                source={require('../../../assets/icons/facebook.png')} />
                <Text style={styles.facebookText}>Sign In With Facebook</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 48,
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: "row",
        flex: 1
    },
    googleText: {
        fontSize: 10,
        marginLeft: 2
    },  
    facebook: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 48,
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: "row",
        flex: 1
    },
    facebookText: {
        fontSize: 10,
        marginLeft: 2
    }
})

export default Federation