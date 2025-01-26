import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeWrapper = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.safeWrapper, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
    backgroundColor: '#333333', // Default background color
    paddingTop: 10, // Adjust for Android's status bar
  },
});

export default SafeWrapper;
