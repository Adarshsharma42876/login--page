import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import SafeWrapper from '../../components/SafeWrapper';
import BackButton from '../../components/BackButton';
import { auth } from '../../config/fireBase.config';

const HomeScreen = () => {
  return (
    <SafeWrapper style={styles.container}>
      <BackButton />
      <Text>Hello, Safe Area on iOS and Android!</Text>
      <TouchableOpacity onPress={() => auth.signOut()} style={styles.button}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
