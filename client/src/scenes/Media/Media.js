import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ModalView from '../../components/ModalView'

const Media = (props) => {
    return(
        <View> 
            <ModalView {...props} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Media