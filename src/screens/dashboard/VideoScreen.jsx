import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';

import SafeWrapper from '../../components/SafeWrapper';
import CustomIcon from '../../components/CustomIcon';
import { hp, wp } from '../../utils/responsive';
import Icons, { icons } from '../../components/Icons';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    id: '1',
    createdAt: '5 months ago',
    title:
      'Build a Realtime Chat App in React Native (tutorial for beginners) 🔴  ',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg',
    videoUrl: '',
    duration: 384,
    user: {
      name: 'Vadim Savin',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
    },
    views: 357000,
    tag: 'PUBG',
    type: 'video',
  },
  {
    id: '2',
    createdAt: '2 months ago',
    title: '🔴 Build the Uber clone in React Native (Tutorial for Beginners)',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.jpeg',
    videoUrl: '',
    duration: 584,
    user: {
      name: 'Vadim Savin',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
    },
    views: 257000,
    tag: 'PUBG',
    type: 'video',
  },
  {
    id: '3',
    createdAt: '2 months ago',
    title: 'How Graham Stephan makes $4,578,896.32 a year on YouTube',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail3.jpeg',
    videoUrl: '',
    duration: 584,
    user: {
      name: 'Graham Stephan',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg',
    },
    views: 257000,
    tag: 'PUBG',
    type: 'video',
  },
  {
    id: '4',
    createdAt: '2 months ago',
    title: 'My One Month Bitcoin Mining Journey',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
    videoUrl: '',
    duration: 584,
    user: {
      name: 'Biahaze',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
    },
    views: 257000,
    tag: 'PUBG',
    type: 'video',
  },
  {
    id: '5',
    createdAt: '2 months ago',
    title: 'My One Month Bitcoin Mining Journey',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
    videoUrl: '',
    duration: 584,
    user: {
      name: 'Biahaze',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
    },
    views: 257000,
    tag: 'PUBG',
    type: 'shorts',
  },
  {
    id: '6',
    createdAt: '2 months ago',
    title: 'My One Month Bitcoin Mining Journey',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
    videoUrl: '',
    duration: 584,
    user: {
      name: 'Biahaze',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
    },
    views: 257000,
    tag: 'PUBG',
    type: 'shorts',
  },
  {
    id: '7',
    createdAt: '2 months ago',
    title: 'My One Month Bitcoin Mining Journey',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
    videoUrl: '',
    duration: 584,
    user: {
      name: 'Biahaze',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
    },
    views: 257000,
    tag: 'PUBG',
    type: 'video',
  },
  {
    id: '8',
    createdAt: '2 months ago',
    title: 'My One Month Bitcoin Mining Journey',
    thumbnail:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
    videoUrl: '',
    duration: 584,
    user: {
      name: 'Biahaze',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
    },
    views: 257000,
    tag: 'PUBG',
    type: 'video',
  },
];

const shorts = [
  [
    {
      id: '1',
      createdAt: '5 months ago',
      title: 'Build a Realtime',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg',
      videoUrl: '',
      duration: 384,
      user: {
        name: 'Vadim Savin',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
      },
      views: 357000,
      tag: 'PUBG',
      type: 'video',
    },
    {
      id: '2',
      createdAt: '2 months ago',
      title: 'Build the Uber',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail2.jpeg',
      videoUrl: '',
      duration: 584,
      user: {
        name: 'Vadim Savin',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
      },
      views: 257000,
      tag: 'PUBG',
      type: 'video',
    },
  ],
  [
    {
      id: '3',
      createdAt: '2 months ago',
      title: 'How Graham Stephan makes $4,578,896.32 a year on YouTube',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail3.jpeg',
      videoUrl: '',
      duration: 584,
      user: {
        name: 'Graham Stephan',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg',
      },
      views: 257000,
      tag: 'PUBG',
      type: 'video',
    },
    {
      id: '4',
      createdAt: '2 months ago',
      title: 'My One Month Bitcoin Mining Journey',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
      videoUrl: '',
      duration: 584,
      user: {
        name: 'Biahaze',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
      },
      views: 257000,
      tag: 'PUBG',
      type: 'video',
    },
  ],
  [
    {
      id: '5',
      createdAt: '2 months ago',
      title: 'My One Month Bitcoin Mining Journey',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
      videoUrl: '',
      duration: 584,
      user: {
        name: 'Biahaze',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
      },
      views: 257000,
      tag: 'PUBG',
      type: 'shorts',
    },
    {
      id: '6',
      createdAt: '2 months ago',
      title: 'My One Month Bitcoin Mining Journey',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
      videoUrl: '',
      duration: 584,
      user: {
        name: 'Biahaze',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
      },
      views: 257000,
      tag: 'PUBG',
      type: 'shorts',
    },
  ],
  [
    {
      id: '7',
      createdAt: '2 months ago',
      title: 'My One Month Bitcoin Mining Journey',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
      videoUrl: '',
      duration: 584,
      user: {
        name: 'Biahaze',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
      },
      views: 257000,
      tag: 'PUBG',
      type: 'video',
    },
    {
      id: '8',
      createdAt: '2 months ago',
      title: 'My One Month Bitcoin Mining Journey',
      thumbnail:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail4.jpeg',
      videoUrl: '',
      duration: 584,
      user: {
        name: 'Biahaze',
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/biahaze.jpg',
      },
      views: 257000,
      tag: 'PUBG',
      type: 'video',
    },
  ],
];

const Header = () => (
  <View style={[styles.header]}>
    <Text style={styles.headerText}>Gameon</Text>
    <View style={styles.rightHeadersContainer}>
      <CustomIcon name="heart" size={22} color="#E37449" fill />
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://st2.depositphotos.com/3310833/7828/v/380/depositphotos_78289624-stock-illustration-flat-hipster-character.jpg',
        }}
        resizeMode="cover"
      />
    </View>
  </View>
);

const VideoItem = ({
  title,
  thumbnail,
  videoUrl,
  duration,
  user,
  views,
  tag,
  createdAt,
}) => (
  <View style={styles.card}>
    <Image source={{ uri: thumbnail }} style={styles.cardImage} />
    <View style={styles.content}>
      <View style={styles.avtarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: user.image }}
          resizeMode="cover"
        />
        <View style={styles.avtarTextContainer}>
          <Text
            style={styles.videoTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {title}
          </Text>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.whiteColor}>{tag}</Text>
            <Text style={styles.whiteColor}>{views} views</Text>
            <Text style={styles.whiteColor}>{createdAt}</Text>
          </View>
        </View>
        <Icons
          icon={icons.MaterialIcons}
          name="more-vert"
          size={20}
          color="#FFFFFF"
        />
      </View>
    </View>
  </View>
);

const Shorts = ({ item }) => {
  return (
    <View style={styles.shortsContainer}>
      <View style={styles.shortsHeader}>
        <View>
          <Image
            source={require('../../assets/shortsMiniLogo.png')}
            style={styles.shortsHeaderImage}
          />
        </View>
        <Text style={styles.shortsHeaderText}>MINI</Text>
      </View>
      <View style={styles.shortsContent}>
        {item.map((short, index) => (
          <View key={index} style={styles.shortsCard}>
            <View style={styles.cardContainer}>
              <Image
                source={{ uri: short.thumbnail }}
                style={styles.shortsCardImage}
              />
              <LinearGradient
                colors={['#000', 'transparent']}
                style={styles.shortsCardContainer}
                start={{ y: 1.0 }}
                end={{ y: 0.0 }}>
                <View style={styles.shortsCardContent}>
                  <Text style={styles.shortsCardTitle}>{short.title}</Text>
                  <Text style={styles.shortsCardViews}>
                    {short.views} views
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const VideoScreen = () => {
  return (
    <SafeWrapper>
      <Header />
      <FlatList
        data={shorts}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          // <VideoItem
          //   title={item.title}
          //   thumbnail={item.thumbnail}
          //   videoUrl={item.videoUrl}
          //   duration={item.duration}
          //   user={item.user}
          //   views={item.views}
          //   createdAt={item.createdAt}
          //   tag={item.tag}
          // />
          <Shorts item={item} />
        )}
      />
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333333',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Anton-Regular',
  },
  rightHeadersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  avatar: { height: 32, width: 32, borderRadius: 16 },
  cardImage: {
    width: wp(100),
    height: 220,
    resizeMode: 'cover',
    marginBottom: 6,
  },
  card: {
    marginBottom: 16,
    overflow: 'hidden',
  },
  textContainer: { marginBottom: 8 },
  text: { fontSize: 14, color: '#fff' },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  avtarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avtarTextContainer: { marginHorizontal: 12, color: '#fff' },
  avatar: { height: 35, width: 35, borderRadius: 20, marginTop: 2 },
  videoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    maxWidth: wp(75),
  },
  caption: { color: '#fff', fontSize: 16 },
  bottomTextContainer: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 4,
  },
  whiteColor: { color: '#FFFFFF', fontWeight: '500', fontSize: 14 },
  shortsContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  shortsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    // alignItems: 'center',
  },
  shortsCard: {
    backgroundColor: 'red',
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardContainer: {
    aspectRatio: 9 / 14,
  },
  shortsCardImage: {
    width: wp(100),
    height: '100%',
    resizeMode: 'cover',
  },
  shortsCardContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  shortsCardContent: {
    width: 'auto',
    padding: 16,
  },
  shortsCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  shortsCardViews: {
    fontSize: 14,
    fontWeight: '600  ',
    color: '#fff',
  },
  shortsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 16,
    gap: 8,
  },
  shortsHeaderImage: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
  },
  shortsHeaderText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default VideoScreen;
