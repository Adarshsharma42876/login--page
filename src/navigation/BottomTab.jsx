import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import HomeScreen from '../screens/dashboard/HomeScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import CustomIcon from '../components/CustomIcon';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        activeTintColor: 'orange',
        inactiveTintColor: '#ccc',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="home"
              size={22}
              color={focused ? '#E37449' : '#ccc'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="search"
              size={22}
              color={focused ? '#E37449' : '#ccc'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity style={styles.addPost}>
              <LinearGradient
                colors={['red', 'orange']}
                style={styles.addIcon}
                start={{ x: 0.5, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}>
                <CustomIcon
                  name="plus"
                  size={22}
                  color={focused ? '#E37449' : '#ccc'}
                />
              </LinearGradient>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="video"
              size={22}
              color={focused ? '#E37449' : '#ccc'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="user"
              size={22}
              color={focused ? '#E37449' : '#ccc'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#000',
    height: 90,
    borderTopWidth: 0,
    elevation: 5, // Adds shadow on Android
    shadowOpacity: 0.1, // For iOS shadow
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    // borderRadius: 20,
    paddingHorizontal: 4,
  },
  addPost: {
    position: 'absolute',
    bottom: 1,
    padding: 8,
    backgroundColor: '#000',
    borderRadius: '50%',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
  addIcon: {
    backgroundColor: '#007bff',
    borderRadius: 70,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTab;
