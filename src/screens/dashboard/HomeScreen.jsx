import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  FlatList,
} from 'react-native';
import React, { useRef } from 'react';
import SafeWrapper from '../../components/SafeWrapper';
import BackButton from '../../components/BackButton';
import { auth } from '../../config/fireBase.config';
import Animated, {
  Easing,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import EvilIcons from 'react-native-vector-icons/FontAwesome5';
import { wp } from '../../utils/responsive';
import LinearGradient from 'react-native-linear-gradient';
import Icons, { icons } from '../../components/Icons';
import { data } from '../../constants/constants';

// <<<<<<< HEAD
const logo = require('../../assets/image/gameOnLogo.svg');

// =======
// const logo = require('../../assets/gameOnLogo.svg');
// >>>>>>> abfe7c2a0d58abdadea1a72f901ae8b002032839
const CONTAINER_HEIGHT = 50;

// Card Icons configuration
const cardIcons = {
  like: { ico1: 'hearto', ico2: 'heart', type: icons.AntDesign },
  comment: {
    ico1: 'chatbox-outline',
    ico2: 'chatbox-outline',
    type: icons.Ionicons,
  },
  bookmark: {
    ico1: 'bookmark',
    ico2: 'bookmark-outline',
    type: icons.Ionicons,
  },
  share: { ico1: 'send', ico2: 'send', type: icons.MaterialIcons },
};

// Sample data for the cards

// Header Component
const Header = ({ headerStyle }) => (
  <Animated.View style={[styles.header, headerStyle]}>
    <Text style={styles.headerText}>Gameon</Text>
    <CustomIcon name="heart" size={22} color="#E37449" fill />
  </Animated.View>
);

// Card Icon Component
const CardIconsComponent = () => (
  <View style={styles.funcConainer}>
    <View style={styles.likeContainer}>
      {Object.entries(cardIcons).map(([key, icon]) => {
        if (key !== 'bookmark') {
          return (
            <Icons
              key={key} // Use the key here
              icon={icon.type}
              name={icon.ico1}
              size={22}
              color="#FFFFFF"
            />
          );
        }
        return null; // Don't render anything for the bookmark key
      })}
    </View>
    <Icons
      icon={cardIcons.bookmark.type}
      name={cardIcons.bookmark.ico2}
      size={24}
      color="#FFFFFF"
    />
  </View>
);

// Card Component
const Card = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.content}>
      <View style={styles.avtarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: item.avatar }}
          resizeMode="cover"
        />
        <View style={styles.avtarTextContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
      </View>
      <LinearGradient
        colors={['#F0B42A', '#D73767', '#8B4091', '#5B98C2']}
        style={styles.linearGradientBtn}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <TouchableOpacity style={styles.followBtn}>
          <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 600 }}>
            Following
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <View style={styles.bottomCard}>
      <CardIconsComponent />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Liked by thekamraan and 905,235 others</Text>
      </View>
      <Text style={styles.text}>
        Pro_Player Start your countdown to the glorious arrival of Marvel
        Studios' #Loki...more
      </Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const scrollY = useSharedValue(0);
  const headerOffset = useSharedValue(CONTAINER_HEIGHT);

  const headerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      headerOffset.value,
      [0, CONTAINER_HEIGHT],
      [-CONTAINER_HEIGHT, 0],
      'clamp',
    );
    const opacity = interpolate(
      headerOffset.value,
      [0, CONTAINER_HEIGHT / 2, CONTAINER_HEIGHT],
      [0, 0.5, 1],
      'clamp',
    );
    return { transform: [{ translateY }], opacity };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const currentOffsetY = event.contentOffset.y;
      const delta = currentOffsetY - scrollY.value;
      if (currentOffsetY > 0) {
        headerOffset.value = withTiming(
          Math.min(Math.max(headerOffset.value - delta, 0), CONTAINER_HEIGHT),
          {
            duration: 10,
            easing: Easing.out(Easing.cubic),
          },
        );
      }
      scrollY.value = currentOffsetY;
    },
  });

  // <<<<<<< HEAD
  return (
    <View style={styles.homeContainer}>
      <View style={[styles.header]}>
        {/* <Image source={logo} style={styles.headerImage} /> */}

        <Text style={styles.headerText}>Gameon</Text>
        <EvilIcons name="heart" size={22} color="#fff" />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={require('../../assets/image/game.png')}
              style={styles.cardImage}
            />
            <View style={styles.bottomCard}>
              <View style={styles.funcConainer}>
                <View style={styles.likeContainer}>
                  <EvilIcons name="heart" size={20} color="#fff" fill />
                  <EvilIcons name="share" size={20} color="#fff" fill />
                </View>
                <EvilIcons name="bookmark" size={20} color="#fff" fill />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  Liked by thekamraan and 905,235 others
                </Text>
              </View>
              <View>
                <Text style={styles.text}>
                  Pro_Player Start your countdown to the glorious arrival of
                  Marvel Studios' #Loki...more
                </Text>
              </View>
            </View>
          </View>
        )}
        // =======
        // <SafeWrapper style={styles.homeContainer}>
        //   <Header headerStyle={headerStyle} />
        //   <Animated.FlatList
        //     data={data}
        //     keyExtractor={item => item.title}
        //     renderItem={({ item }) => <Card item={item} />}
        //     contentContainerStyle={styles.scrollContent}
        //     onScroll={scrollHandler}
        //     scrollEventThrottle={16}
        //     showsVerticalScrollIndicator={false}
        // {/* >>>>>>> abfe7c2a0d58abdadea1a72f901ae8b002032839 */}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // <<<<<<< HEAD
  homeContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  // =======
  // homeContainer: { flex: 1 },
  // >>>>>>> abfe7c2a0d58abdadea1a72f901ae8b002032839
  header: {
    backgroundColor: '#333333',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Anton-Regular',
  },
  scrollContent: { paddingTop: CONTAINER_HEIGHT },
  cardImage: {
    width: '95%',
    height: 220,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  card: {
    // <<<<<<< HEAD
    paddingTop: 16,
    paddingBottom: 29,
    // =======
    // paddingTop: 16,
    // paddingBottom: 24,
    // >>>>>>> abfe7c2a0d58abdadea1a72f901ae8b002032839
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0A6',
    marginBottom: 16,
  },
  funcConainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    columnGap: 16,
    paddingVertical: 8,
  },
  bottomCard: { paddingHorizontal: 24 },
  textContainer: { marginBottom: 8 },
  text: { fontSize: 14, color: '#fff' },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  avtarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avtarTextContainer: { marginHorizontal: 16, color: '#fff' },
  avatar: { height: 35, width: 35, borderRadius: 20 },
  title: { fontSize: 14, fontWeight: '700', color: '#fff' },
  caption: { color: '#fff' },
  linearGradientBtn: { borderRadius: 5 },
  followBtn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
