import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'
import Comment from '../../components/Comment'
const { height, width } = Dimensions.get('screen')

const ModalView = (props) => {
    const { item } = props.route.params
    return (
        <View style={styles.container}>
            <Image
                style={{ height: height * 0.5, width: width }}
                source={item.src}
            />
            <View style={styles.reaction}>
                <FontIcon
                    style={styles.icon}
                    name="heart"
                    size={25}
                />
                <FontIcon
                    style={styles.icon}

                    name="comment"
                    size={25}
                />
            </View>
            <View>
                <Comment {...props}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    reaction: {
        flexDirection: 'row',
        backgroundColor: colors.clearWhite
    },
    icon: {
        marginLeft: 10,
        marginTop: 5,
    },
})

export default ModalView