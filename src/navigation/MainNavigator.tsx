import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { mergeStack } from './Screencollection'

const Stack = createStackNavigator()

const MainNavigator: FC = () => {
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
        )
      })}
    </Stack.Navigator>
  )
}

export default MainNavigator
