import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import ProfileInfo from '../../components/ProfileInfo'
import MyBees from '../../components/MyBees'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const UserProfile = (props) => {
    return (
        <View>
            <ProfileInfo {...props} context='other'/>
            <View style={styles.actions}>
                <TouchableOpacity>
                    <FontIcon
                        name="user-friends"
                        size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontIcon
                        name="envelope"
                        size={25}
                        solid
                    />
                </TouchableOpacity>
            </View>
            <MyBees { ...props }/>
        </View>
    )
}

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        backgroundColor: 'white',
        marginTop: 2,
        marginBottom: 2,
        paddingVertical: 10
    }
})

export default UserProfile