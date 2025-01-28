import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useRef } from 'react';
import Video from 'react-native-video';
import { screenHeight, screenWidth } from '../../utils/responsive';
import convertToProxyURL from 'react-native-video-cache';
import Icons, { icons } from '../../components/Icons';

export const videoActionsIcons = [
  {
    ico1: 'heart',
    ico2: 'heart-outline',
    type: icons.MaterialCommunityIcons,
    text: '50',
  },
  {
    ico1: 'comment-text',
    ico2: 'comment-text',
    type: icons.MaterialCommunityIcons,
    text: '20',
  },
  {
    ico1: 'share',
    ico2: 'share',
    type: icons.MaterialCommunityIcons,
    text: '5',
  },
];

const VideoScreen = () => {
  const videoRef = useRef(null);
  if (videoRef.current) videoRef.current.resume();
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{
          uri: convertToProxyURL('https://www.w3schools.com/html/mov_bbb.mp4'),
        }}
        resizeMode="cover"
        repeat={true}
        ignoreSilentSwitch="ignore"
        playInBackground={false}
        playWhenInactive={false}
        controls={false}
        disableFocus={true}
        hideShutterView
        shutterColor="transparent"
        style={styles.backgroundVideo}
      />
      <View style={styles.activityContainer}>
        <View style={styles.userContainer}>
          <View style={styles.avtarContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri: convertToProxyURL(
                  'https://st2.depositphotos.com/3310833/7828/v/380/depositphotos_78289624-stock-illustration-flat-hipster-character.jpg',
                ),
              }}
              resizeMode="cover"
            />
            <View style={styles.avtarTextContainer}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 500 }}>
                @riddhesh_desai
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.videoIconsContainer}>
          {videoActionsIcons.map((action, index) => {
            return (
              <View key={index} style={styles.videoIcons}>
                <Icons
                  icon={action.type}
                  name={action.ico1}
                  size={32}
                  color="#FFFFFF"
                />
                <Text style={styles.actionText}>{action.text}</Text>
              </View>
            );
          })}
        </View>
        {/* <Text style={styles.title}>Video Screen</Text> */}
      </View>
    </View>
  );
};

// Later on in your styles..
const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    flexGrow: 1,
    flex: 1,
    // backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: screenHeight,
    aspectRatio: 9 / 16,
    flex: 1,
    zIndex: -1,
  },
  activityContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 25,
    // borderRadius: 5,
  },
  userContainer: {
    width: '70%',
    justifyContent: 'flex-end',
  },
  avtarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avtarTextContainer: { marginHorizontal: 16, color: '#fff' },
  avatar: { height: 40, width: 40, borderRadius: 20 },
  videoIconsContainer: {
    // marginBottom: 20,
  },
  videoIcons: {
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
});

export default VideoScreen;
