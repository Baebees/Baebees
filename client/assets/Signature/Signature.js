import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
// import AppLoading from 'expo-app-loading'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../src/theme/colors'

const Signature = ({ icon, navigation }) => {

    // const [ isReady, setIsReady ] = useState(false)

    // const _cacheResourcesAsync = async () => {
    //     const images = [require('./Baebees.png')];

    //     const cacheImages = images.map(image => {
    //         return Asset.fromModule(image).downloadAsync();
    //     });
    //     return Promise.all(cacheImages);
    // }

    // if (!isReady) {
    //     return (
    //         <AppLoading
    //             startAsync={_cacheResourcesAsync}
    //             onFinish={() => setIsReady(true)}
    //             onError={console.warn}
    //         />
    //     );
    // }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={navigation ? () => { navigation.navigate('Notifications') } : null}
            >
                <View style={{ padding: 20 }}>
                    <FontIcon
                        style={styles.icon}
                        name={icon}
                        color={colors.lightBlack}
                        size={25}
                        solid={false}
                    />
                    <Badge
                        status="error"
                        containerStyle={styles.status}
                        textStyle={{ fontWeight: 40 }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // width: '100%',
        // height: '100%',
    },
    loginText: {
        //     marginTop: "10%",
        //     fontSize: 32,
        //     fontWeight: 'bold'
    },
    icon: {
        fontSize: 20,
    },
    status: {
        position: "absolute",
    }
})

export default Signature