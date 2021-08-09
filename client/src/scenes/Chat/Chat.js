import React from 'react'
import { View, Text, SafeAreaView} from 'react-native'
import User from '../../components/User'

const Chat = (props) => {
    return(
        <SafeAreaView>
            <User {...props} path='Conversation'/>
            <User />
            <User />
            <User />
        </SafeAreaView>
    )
}

export default Chat