import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { authStack, mergeStack } from './Screencollection';
import { onAuthStateChanged } from 'firebase/auth';

import { useUserStore } from '../store';
import { auth } from '../config/fireBase.config';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  const clearUser = useUserStore(state => state.clearUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log(typeof user, 'User signed in:====', user);
      if (user) {
        setUser(user); // Save user to Zustand
      } else {
        console.log('User signed out');
        clearUser(); // Clear user from Zustand
      }
    });

    // Cleanup listener when the component unmounts
    return () => unsubscribe();
  }, [setUser, clearUser]);

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
