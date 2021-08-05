import React from 'react'
import { View, Image, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const Kiki = (props) => {
    return(
        <View>
            <Image 
            source={require('../../../assets/Kiki/Kiki.gif')}
            style={{ height: height * 0.5, width: width  }}
            />
        </View>
    )
}

export default Kiki