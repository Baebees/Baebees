import React from 'react'
import { View, StyleSheet } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const TopMargin = (props) => {
    return (
        <View>
            <FontIcon
                name="ellipsis-h"
                backgroundColor="transparent"
                size={20}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default TopMargin

