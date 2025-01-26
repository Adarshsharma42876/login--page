import { Dimensions, PixelRatio } from 'react-native';

// Get screen dimensions
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Calculate responsive width (wp) and height (hp)
const wp = percentage => {
  const value = (percentage * SCREEN_WIDTH) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

const hp = percentage => {
  const value = (percentage * SCREEN_HEIGHT) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

// Font scaling (optional)
const sp = fontSize => {
  const scaleFactor = SCREEN_WIDTH / 375; // 375 is a standard base width (iPhone X)
  const scaledSize = fontSize * scaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export { wp, hp, sp, screenWidth, screenHeight };
