import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import HomeScreen from '../screens/dashboard/HomeScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
