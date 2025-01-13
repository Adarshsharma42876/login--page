import React from 'react';
import { StyleSheet, Platform, StatusBar, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeWrapperProps extends ViewProps {
  children: React.ReactNode;
}

const SafeWrapper: React.FC<SafeWrapperProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <SafeAreaView style={[styles.safeWrapper, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeWrapper: {
    flex: 1,
    backgroundColor: '#ffffff', // Default background color
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for Android's status bar
  },
});

export default SafeWrapper;
