import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/guide/HomeScreen';
import DocumentScreen from '../../screens/guide/DocumentScreen';
import PageScreen from '../../screens/guide/PageScreen';
import HeaderButtonsOption from '../options/HeaderButtonsOption';

const Stack = createStackNavigator();

function GuideStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          ...HeaderButtonsOption(navigation),
        })}
      />
      <Stack.Screen name="Document" component={DocumentScreen} />
      <Stack.Screen name="Page" component={PageScreen} />
    </Stack.Navigator>
  );
}

export default GuideStack;
