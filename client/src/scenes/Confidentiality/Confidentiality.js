import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import TopMargin from '../../components/TopMargin'
const { width } = Dimensions.get('window')

const Confidentiality = (props) => {
    return(
        <View style={styles.container}>
            <TopMargin />
            <View style={{width: width}}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default Confidentiality