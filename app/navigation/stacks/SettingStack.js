import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/setting/HomeScreen';
import DetailScreen from '../../screens/setting/DetailScreen';

import ModalScreenOption from '../options/ModalScreenOption';

const Stack = createStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator {...ModalScreenOption}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default SettingStack;
