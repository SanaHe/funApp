import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TeacherScreen from '../../screens/TeacherScreen';

const Stack = createStackNavigator();

function TeacherStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Teacher" component={TeacherScreen} />
    </Stack.Navigator>
  );
}

export default TeacherStack;
