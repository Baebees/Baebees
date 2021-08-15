import React, { useState, useRef }from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Dimensions } from 'react-native';

const VideoPlayer = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View>
      <Video
        ref={video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height/2
  },
  video: {
      maxHeight: Dimensions.get('screen').height/2
  }
})

export default VideoPlayer