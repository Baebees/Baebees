import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Bee from '../../components/Bee'
import VideoPlayer from '../../components/VideoPlayer'
import Bees from '../../components/Bees'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'

const Home = (props) => {

    return (
        <View>
            <Bees {...props} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Bee {...props}>
                    <VideoPlayer />
                </Bee>
                <Bee {...props}>
                    <VideoPlayer />
                </Bee>
                <View style={{ marginBottom: 80, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <FontIcon
                        name="circle-notch"
                        backgroundColor="transparent"
                        size={25}
                        color={colors.lightBlack}
                    />
                    <Text>Load More</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home