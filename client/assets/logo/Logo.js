import React, { useLayoutEffect, useState } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
const { height } = Dimensions.get('screen')

const Logo = () => {

    const [ isReady, setIsReady ] = useState(false)

    useLayoutEffect(() => {
        _cacheResourcesAsync()
    }, [isReady])

    const _cacheResourcesAsync = async () => {
        const images = [require('./logo.png')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }

    if (!isReady) {
        return (
            <AppLoading
                startAsync={_cacheResourcesAsync}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
        );
    }

    return (
        <View style={styles.container}>
                 <Image
                     style={{ width: 120 , height: 120 }}
                     source={require('./logo.png')} 
                    //  source="https://i.pinimg.com/originals/8e/a9/15/8ea915c2950a58cad7e184b94d6d4bac.jpg"
                     /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.2
    }
})

export default Logo