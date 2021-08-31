import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LostModalView from '../../components/LostModalView'

const LostMedia = (props) => {
    return(
        <View> 
            <LostModalView {...props} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default LostMedia