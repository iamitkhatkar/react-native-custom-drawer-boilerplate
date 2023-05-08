import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './drawer';

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
