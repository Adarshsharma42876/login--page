import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Navigation from '../navigation/Navigation';
import { goBack } from '../utils/NavigationUtils';

const BackButton = () => {
  const handleBackPress = () => {
    goBack(); // Navigate to the previous screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} style={styles.button}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
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

export default BackButton;
