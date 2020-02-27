import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import InformationStack from './stacks/InformationStack';
import TeacherStack from './stacks/TeacherStack';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Information" component={InformationStack} />
        <Stack.Screen name="Teacher" component={TeacherStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
