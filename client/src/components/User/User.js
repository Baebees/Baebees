import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { colors } from '../../theme/colors'

const User = ({ navigation, path }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.user}
            onPress={()=> navigation.navigate(path, { from: 'Search' })}
            >
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle: 'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />
                <Text style={styles.username}>
                    Username
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.clearWhite,
        marginTop: 5
    },  
    user: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    username: {
        marginLeft: 10
    }
})

export default User