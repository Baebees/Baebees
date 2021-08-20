import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
// import AppLoading from 'expo-app-loading'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../../theme/colors'

const HeaderRight = ({ icon, navigation }) => {

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
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    loginText: {
    },
    icon: {
        fontSize: 20,
    },
    status: {
        position: "absolute",
    }
})

export default HeaderRight