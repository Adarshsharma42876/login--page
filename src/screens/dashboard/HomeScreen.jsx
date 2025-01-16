import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
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
import CustomIcon from '../../components/CustomIcon';
import { wp } from '../../utils/responsive';

const logo = require('../../assets/gameOnLogo.svg');

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
    <SafeWrapper style={styles.homeContainer}>
      <Animated.View style={[styles.header, headerStyle]}>
        {/* <Animated.View style={styles.logoContainer}>
          <Image source={logo} style={styles.headerImage} />
        </Animated.View> */}
        <Text style={styles.headerText}>Gameon</Text>
        <CustomIcon name="heart" size={22} color="#E37449" fill />
      </Animated.View>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={require('../../assets/game.png')}
              style={styles.cardImage}
            />
            <View style={styles.bottomCard}>
              <View style={styles.funcConainer}>
                <View style={styles.likeContainer}>
                  <CustomIcon name="heart" size={20} color="#fff" fill />
                  <CustomIcon name="share" size={20} color="#fff" fill />
                </View>
                <CustomIcon name="bookmark" size={20} color="#fff" fill />
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
        contentContainerStyle={styles.scrollContent}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      />
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#333333',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    height: CONTAINER_HEIGHT,
    flexDirection: 'row',
    paddingHorizontal: 10,
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
    width: wp(100),
    height: 220,
    resizeMode: 'cover',
    marginBottom: 6,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  card: {
    paddingTop: 16,
    paddingBottom: 24,
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
