import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/forum/HomeScreen';
import TopicScreen from '../../screens/forum/TopicScreen';
import HeaderButtonsOption from '../options/HeaderButtonsOption';

const Stack = createStackNavigator();

function ForumStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          ...HeaderButtonsOption(navigation),
        })}
      />
      <Stack.Screen name="Topic" component={TopicScreen} />
    </Stack.Navigator>
  );
}

export default ForumStack;
