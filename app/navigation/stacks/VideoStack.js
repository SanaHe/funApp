import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/video/HomeScreen';
import CourseScreen from '../../screens/video/CourseScreen';
import EpisodeScreen from '../../screens/video/EpisodeScreen';
import HeaderButtonsOption from '../options/HeaderButtonsOption';

const Stack = createStackNavigator();

function VideoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          ...HeaderButtonsOption(navigation),
        })}
      />
      <Stack.Screen name="Course" component={CourseScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  );
}

export default VideoStack;
