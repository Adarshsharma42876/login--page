import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { authStack, mergeStack } from './Screencollection';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { StorageKeys } from '../constants';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { getItem } = useAsyncStorage(StorageKeys.USER_PROFILE);
  const [initialRoute, setInitialRoute] = useState('');

  useEffect(() => {
    getItem((error, result) => {
      if (result && result.includes('idToken')) {
        setInitialRoute('BottomTab');
      } else {
        setInitialRoute('Login');
      }
    });
  }, []);

  if (!initialRoute) return;

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{ headerShown: false }}>
      {authStack.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
      {mergeStack.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainNavigator;
