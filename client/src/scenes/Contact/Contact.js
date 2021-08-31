import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { ListItem } from 'react-native-elements'
import { colors } from '../../theme/colors'

const Contact = (props) => {
    return (
        <View>
            <ListItem bottomDivider>
                <View style={{ width: 25 }}>
                    <FontIcon
                        name="envelope-open"
                        color={colors.lightBlack}
                        backgroundColor="transparent"
                        size={20}
                        solid
                    />
                </View>
                <ListItem.Content>
                    <ListItem.Title>E-mail us</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <View style={{ width: 25 }}>
                    <FontIcon
                        name="phone-alt"
                        color={colors.lightBlack}
                        backgroundColor="transparent"
                        size={20}
                    />
                </View>
                <ListItem.Content>
                    <ListItem.Title>Call us</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Contact