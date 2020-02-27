import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/search/HomeScreen';
import ResultScreen from '../../screens/search/ResultScreen';
import EpisodeScreen from '../../screens/video/EpisodeScreen';
import CourseScreen from '../../screens/video/CourseScreen';
import ModalScreenOption from '../options/ModalScreenOption';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator{...ModalScreenOption}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="Course" component={CourseScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
