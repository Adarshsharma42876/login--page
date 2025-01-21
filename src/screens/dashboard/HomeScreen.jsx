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
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import EvilIcons from 'react-native-vector-icons/FontAwesome5';
import { wp } from '../../utils/responsive';

const logo = require('../../assets/image/gameOnLogo.svg');

const CONTAINER_HEIGHT = 50;

const HomeScreen = () => {
  const scrollY = useSharedValue(0);
  const isScrllUp = useSharedValue(true);

  const headerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          isScrllUp.value ? 0 : scrollY.value,
          [0, CONTAINER_HEIGHT],
          [0, -CONTAINER_HEIGHT],
          'clamp',
        ),
      },
    ],
    opacity: interpolate(
      isScrllUp.value ? 0 : scrollY.value,
      [0, CONTAINER_HEIGHT - 20, CONTAINER_HEIGHT],
      [1, 0.1, 0],
      'clamp',
    ),
  }));

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      isScrllUp.value = event.contentOffset.y < scrollY.value;
      scrollY.value = event.contentOffset.y;
    },
  });

  const data = [...Array(30)].map((_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
  }));

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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  headerImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  scrollContent: {
    paddingTop: CONTAINER_HEIGHT, // Same height as the header
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    backgroundColor: 'gray',
    marginTop: 10,
  },
  itemText: {
    color: 'white',
  },
  cardImage: {
    width: '95%',
    height: 220,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  card: {
    paddingTop: 16,
    paddingBottom: 29,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0A6',
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
  bottomCard: {
    paddingHorizontal: 24,
  },
  textContainer: {
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});

export default HomeScreen;
