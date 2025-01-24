import React from 'react';
import { StyleSheet, Platform, StatusBar, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeWrapper = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.safeWrapper, style]} {...rest} edges={['top']}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
    backgroundColor: '#333333', // Default background color
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for Android's status bar
  },
});

export default SafeWrapper;
