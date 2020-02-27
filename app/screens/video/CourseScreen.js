import React, {useState, useEffect, useReducer} from 'react';
import {Button, View, Text} from 'react-native';

import Home from '../../navigation/RootNavigator';
import useShare from '../../components/shared/useShare';

function CourseScreen({route, navigation}) {
  const {id} = route.params;
  const [course, setCourse] = useState('');
  const {reducer, initialState} = useShare();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getCourses = async () => {
      dispatch({type: 'init'});
      try {
        let response = await fetch(`http://192.168.1.9:3000/courses/${id}`);
        let responseJson = await response.json();
        console.log(responseJson.course);
        setCourse(responseJson.course);
        dispatch({type: 'success'});
      } catch (error) {
        console.error(error);
        dispatch({type: 'failure'});
      }
    };

    getCourses();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>body: {JSON.stringify(course.body)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default CourseScreen;
