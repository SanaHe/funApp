import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserScreen from '../../screens/UserScreen';
import HeaderButtonsOption from '../options/HeaderButtonsOption';

const Stack = createStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={({navigation}) => ({
          ...HeaderButtonsOption(navigation),
        })}
      />
    </Stack.Navigator>
  );
}

export default UserStack;
