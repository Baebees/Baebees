import React, { Suspense } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Signin from './Signin'
const Logo = React.lazy(() => import('../../assets/logo/Logo'))
const Auth = () => {
    return (
        <View style={styles.container}>
            <Suspense fallback={<ActivityIndicator size="large" color="#6495ed" style={{marginTop: '10%'}}/>} >
                <Logo />
            </Suspense>
            <Signin />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80vw',
        height: '70vh',
        backgroundColor: '#FFF',
        borderRadius: 10,
        position: 'relative',
        top: '10%',
        left: '50%',
        transform: [{ translateX: '-50%' }],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default Auth
