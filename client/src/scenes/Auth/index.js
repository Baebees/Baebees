import React, { Suspense, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Signin from './Signin'
import Signup from './Signup'
import { Dimensions } from 'react-native'
import Logo from '../../../assets/logo/Logo'
// const Logo = React.lazy(() => import('../../../assets/logo/Logo'))

const Auth = () => {
    const [ isMember, setMember ] = useState(true)
    const switchView = (view) => {
        setMember(view)
    }
    return (
        <View style={styles.outer}>
        <View style={styles.container}>
            {/* <Suspense fallback={<ActivityIndicator size="large" color="#6495ed" style={{marginTop: 10}}/>} > */}
                <Logo />
            {/* </Suspense> */}
            {   isMember ?
                <Signin switchView={switchView}/> :
                <Signup switchView={switchView}/>
            }
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.7,
        backgroundColor: '#FFF',
        borderRadius: 10,
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    outer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Auth
