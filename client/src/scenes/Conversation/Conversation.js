import React from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { colors } from '../../theme/colors'
import Message from '../../components/Message'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
const { height, width } = Dimensions.get('screen')

const conversation = [
    { friend: 'Hello' },
    { owner: 'Hello' },
    { friend: 'How are you?' },
    { owner: 'I"m fine thank you' },
]
const Conversation = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.messagesArea}>
            <Message />
            </SafeAreaView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Write a message..."
                    multiline
                />
                <TouchableOpacity>
                    <FontIcon
                        name="paper-plane"
                        size={25}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: height
    },
    input: {
        height: 30,
        width: width * 0.85,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.darkGray,
        borderRadius: 20,
        marginRight: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'space-around',
        paddingHorizontal: 5
    },
    messagesArea: {
        height: height * 0.8
    }
})

export default Conversation