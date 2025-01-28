import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeWrapper = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.safeWrapper, style]} edges={['top']} {...rest}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
    backgroundColor: '#333333', // Default background color
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    paddingBottom: 0,
  },
});

export default SafeWrapper;
