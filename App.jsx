import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Navigation from './src/navigation/Navigation';

const Stack = createStackNavigator();

export default function App() {
  return <Navigation />;
}