import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/dashboard';
import Wishlist from '../screens/wishlist';
import History from '../screens/history';
import {Platform} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const drawerIcon = ({focused, size}, name) => {
    return (
      <Icon
        name={name}
        size={size}
        color={focused ? Colors.active : Colors.inactive}
      />
    );
  };
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '60%',
        },
        sceneContainerStyle: {
          backgroundColor: Colors.bg,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: options => drawerIcon(options, 'home-outline'),
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          drawerIcon: options => drawerIcon(options, 'heart-outline'),
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          drawerIcon: options => drawerIcon(options, 'history'),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const Colors = {
  bg: '#009688',
  active: '#fff',
  inactive: '#eee',
  transparent: 'transparent',
};
