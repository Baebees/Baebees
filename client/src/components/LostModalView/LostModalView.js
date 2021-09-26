import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'

const { height, width } = Dimensions.get('screen')

const LostModalView = (props) => {
    const { item } = props.route.params
    const [comment, isComment] = useState(false)

    return (
        <View
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Image
                style={{ height: height * 0.6, width: width }}
                source={item.src}
            />
            <View style={styles.reaction}>
                <TouchableOpacity>
                    <FontIcon
                        style={styles.icon}
                        name="map-marker-alt"
                        size={25}
                        onPress={() => props.navigation.navigate('LostMap')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontIcon
                        style={styles.icon}
                        name="phone-alt"
                        size={25}
                        onPress={() => props.navigation.navigate('Conversation')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.6
    },
    reaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.clearWhite
    },
    icon: {
        color: colors.darkGray
    }
})

export default LostModalView