import { Text, StyleSheet } from 'react-native';
import React from 'react';
import SafeWrapper from '../../components/SafeWrapper';

const HomeScreen = () => {
  return (
    <SafeWrapper style={styles.container}>
      <Text>Hello, Safe Area on iOS and Android!</Text>
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  container: {  
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
