import React from 'react'
import { View, Text } from 'react-native'
import Bee from '../../components/Bee'
import VideoPlayer from '../../components/VideoPlayer'
const Home = (props) => {

    return(
        <View>
            <Bee>
                <VideoPlayer />
            </Bee>
        </View>
    )
}

export default Home