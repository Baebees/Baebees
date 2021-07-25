import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Logo = () => {

    return(
        <View style={styles.container}>
            <Image 
            style={{width: '10rem', height: '10rem'}}
            source={require('./logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    }
})

export default Logo