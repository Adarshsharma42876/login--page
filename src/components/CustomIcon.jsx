// EvilIcons.js
import React from 'react';
import EvilIcons from 'react-native-vector-icons/FontAwesome5';

const MyIcons = ({ name, size = 30, color = '#900' }) => {
  return <EvilIcons name={name} size={size} color={color} thin />;
};

export default MyIcons;
