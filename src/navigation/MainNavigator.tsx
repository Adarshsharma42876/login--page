import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { authStack, mergeStack } from './Screencollection';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/fireBase.config';
import { useUserStore } from '../store';

const Stack = createStackNavigator();

const MainNavigator: FC = () => {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  const clearUser = useUserStore(state => state.clearUser);

  onAuthStateChanged(auth, user => {
    console.log(typeof user, 'User signed in:', user);
    if (user) {
      setUser(user); // Save user to Zustand
    } else {
      console.log('User signed out');
      clearUser(); // Clear user from Zustand
    }
  });

  if (user) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {mergeStack.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {authStack.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    );
  }
};

export default MainNavigator;
