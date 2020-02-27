import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/information/HomeScreen';
import ArticleScreen from '../../screens/information/ArticleScreen';
import ModalScreenOption from '../options/ModalScreenOption';

const Stack = createStackNavigator();

function InformationStack() {
  return (
    <Stack.Navigator {...ModalScreenOption}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
}

export default InformationStack;
