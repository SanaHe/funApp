import * as React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HeaderButtonsOption from '../options/HeaderButtonsOption';
import BaseOption from '../options/BaseOption';
import StackScreenOption from '../options/StackScreenOption';

import HomeScreen from '../../screens/HomeScreen';
import CourseScreen from '../../screens/video/CourseScreen';
import EpisodeScreen from '../../screens/video/EpisodeScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{...StackScreenOption}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          ...BaseOption('发现'),
          ...HeaderButtonsOption(navigation),
        })}
      />
      <Stack.Screen
        name="Course"
        component={CourseScreen}
        options={{
          ...BaseOption('课程'),
        }}
      />
      <Stack.Screen
        name="Episode"
        component={EpisodeScreen}
        options={{
          ...BaseOption('章节'),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
