import React from 'react'
import { View } from 'react-native';
import Register from '../../../components/Register'

const Signup = (props) => {
    return (
        <View>
            <Register {...props}/>
        </View>
    )
}

export default Signup