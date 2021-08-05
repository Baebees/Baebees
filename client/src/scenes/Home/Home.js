import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Bee from '../../components/Bee'
import VideoPlayer from '../../components/VideoPlayer'
import Bees from '../../components/Bees'

const Home = (props) => {

    return (
        <View>
            <Bees />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Bee>
                <VideoPlayer />
            </Bee>
            <Bee>
                <VideoPlayer />
            </Bee>
            <View style={{marginBottom: 90}}>
                <Text>Load More</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default Home