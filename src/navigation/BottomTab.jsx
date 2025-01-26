import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import HomeScreen from '../screens/dashboard/HomeScreen';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import CustomIcon from '../components/CustomIcon';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons, { icons } from '../components/Icons';
import VideoScreen from '../screens/dashboard/VideoScreen';

const Tab = createBottomTabNavigator();
const tabBarIcon = {
  home: {
    ico1: 'home',
    ico2: 'home-outline',
    type: icons.Ionicons,
  },
  plus: {
    ico1: 'plus',
    ico2: 'plus',
    type: icons.Entypo,
  },
  user: {
    ico1: 'user',
    ico2: 'user-o',
    type: icons.FontAwesome,
  },
  search: {
    ico1: 'search1',
    ico2: 'search1',
    type: icons.AntDesign,
  },
  video: {
    ico1: 'folder-video',
    ico2: 'folder-video',
    type: icons.Entypo,
  },
};

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
            <Icons
              icon={tabBarIcon.home.type}
              name={focused ? tabBarIcon.home.ico1 : tabBarIcon.home.ico2}
              size={22}
              color={focused ? '#E37449' : '#ccc'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              icon={tabBarIcon.video.type}
              name={focused ? tabBarIcon.video.ico1 : tabBarIcon.video.ico2}
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
                colors={['#F0B42A', '#D73767', '#8B4091', '#5B98C2']}
                style={styles.addIcon}
                // start={{ x: 0.5, y: 0.0 }}
              >
                <Icons
                  icon={tabBarIcon.plus.type}
                  name={focused ? tabBarIcon.plus.ico1 : tabBarIcon.plus.ico2}
                  size={32}
                  color="#ccc"
                />
              </LinearGradient>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons
              icon={tabBarIcon.search.type}
              name={focused ? tabBarIcon.search.ico1 : tabBarIcon.search.ico2}
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
            <Icons
              icon={tabBarIcon.user.type}
              name={focused ? tabBarIcon.user.ico1 : tabBarIcon.user.ico2}
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
