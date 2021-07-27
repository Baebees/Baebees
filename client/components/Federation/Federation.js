import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
const Federation = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.google}
            >
                <Image 
                style={{width: '2rem', height: '2rem'}}
                source={require('../../assets/icons/google.png')} />
                <Text style={styles.googleText}>Sign In With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.facebook}
            >
                <Image 
                style={{width: '1rem', height: '2rem'}}
                source={require('../../assets/icons/facebook.png')} />
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
        height: '3rem',
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: "row",
        flex: 1
    },
    googleText: {
        fontSize: '0.6rem',
        marginLeft: 2
    },  
    facebook: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '3rem',
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: "row",
        flex: 1
    },
    facebookText: {
        fontSize: '0.6rem',
        marginLeft: 2
    }
})

export default Federation