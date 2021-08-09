import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import ProfileInfo from '../../components/ProfileInfo'
import MyBees from '../../components/MyBees'
import Kiki from '../../components/Kiki'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'

const Profile = (props) => {
    const [view, setView] = useState(true)
    return (
        <View>
            <ProfileInfo />
            <View style={styles.switch}>
                <TouchableOpacity>
                    <FontIcon
                        name="heart"
                        onPress={() => {
                            setView(true)
                        }}
                        size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontIcon
                        name="images"
                        onPress={() => {
                            setView(false)
                        }}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            {view ? <Kiki /> : <MyBees {...props}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    switch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        backgroundColor: 'white',
        marginTop: 2,
        marginBottom: 2,
        paddingVertical: 10
    }
})

export default Profile