import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'
import * as FileSystem from 'expo-file-system'

const Post = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera = useRef(null)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const snap = async () => {
        const options = {
            maxDuration: 15,
            quality: Camera.Constants.VideoQuality['720p'],

          };
        if (camera) {
            // let photo = await camera.takePictureAsync();
            // let video = await camera.recordAsync(options)
            // console.log(video)
            // let fileInfo = await FileSystem.getInfoAsync('egaeg')
        }
    };
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={ref => { camera = ref }} useCamera2Api={true}>
                <View style={styles.buttonContainer}>
                    <View
                        style={styles.buttons}
                    >
                        <TouchableOpacity>
                        <FontIcon
                            onPress={() => snap()}
                            style={styles.icon}
                            name="volume-mute"
                            color={colors.white}
                            size={25}
                            solid
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <FontIcon
                            onPress={() => snap()}
                            style={styles.icon}
                            name="circle"
                            color={colors.reddish}
                            size={25}
                            solid
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <FontIcon
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}
                            style={styles.icon}
                            name="redo"
                            color={colors.white}
                            size={25}
                            solid
                        />
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    text: {
        fontSize: 100
    },
    icon: {
        fontSize: 30,
        padding: 20,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 100
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: '80vh',
    }
});

export default Post