import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import VideoPlayer from 'expo-video-player';

const videoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <VideoPlayer
       videoProps={{
        shouldPlay: false,
        resizeMode: Video.RESIZE_MODE_CONTAIN,
        source: {
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
      }}
      icon={{
        play: <Text style={{ color: '#FFF' }}>PLAY</Text>,
        pause: <Text style={{ color: '#FFF' }}>PAUSE</Text>,
      }}
      style={{ height: '50vh' }}

      />
      <View style={styles.buttons}>
        {/* <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    },
    video: {
        maxHeight: '50vh'
    }
})

export default videoPlayer