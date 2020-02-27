import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabScreenOption from './options/TabScreenOption';
import HomeStack from './stacks/HomeStack';
import VideoStack from './stacks/VideoStack';
import ForumStack from './stacks/ForumStack';
import GuideStack from './stacks/GuideStack';
import UserStack from './stacks/UserStack';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...TabScreenOption(route),
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Video" component={VideoStack} />
      <Tab.Screen name="Forum" component={ForumStack} />
      <Tab.Screen name="Guide" component={GuideStack} />
      <Tab.Screen name="User" component={UserStack} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
