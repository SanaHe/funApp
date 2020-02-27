import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import SettingStack from './stacks/SettingStack';
import SearchStack from './stacks/SearchStack';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Setting" component={SettingStack} />
      <Stack.Screen name="Search" component={SearchStack} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
