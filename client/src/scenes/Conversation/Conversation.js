import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { colors } from '../../theme/colors'
import Message from '../../components/Message'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
const { height, width } = Dimensions.get('window')

const conversation = [
    { friend: 'Hello' },
    { owner: 'Hello' },
    { friend: 'How are you?' },
    { owner: 'I"m fine thank you' },
]
const Conversation = (props) => {

    const bottomTabBarHeight = useBottomTabBarHeight();
    const messageText = (txt) => ( setMsg(txt) )
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.messagesArea}>
                <Message sender="friend" messager='friendMessage' textField="friend"/>
                <Message sender="owner" messager='ownerMessage' textField="owner"/>
            </SafeAreaView>
            <View style={styles.inputContainer, {
                flexDirection: 'row',
                paddingVertical: 10,
                alignContent: 'space-around',
                marginBottom: bottomTabBarHeight,
                paddingHorizontal: 5,
                height: height * 0.2,
                backgroundColor: colors.clearWhite,
            }}>
                <TextInput
                    style={styles.input}
                    placeholder="Write a message..."
                    onChangeText={messageText}
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

 
    },
    messagesArea: {
        height: height * 0.8,
    }
})

export default Conversation