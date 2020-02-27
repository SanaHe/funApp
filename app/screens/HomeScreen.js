import React, {useState, useEffect, useReducer} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import useShare from '../components/shared/useShare';
import HeaderSlides from '../components/home/HeaderSlides';
import Api from '../constants/Api';
import NoData from '../components/shared/NoData';
import Loading from '../components/shared/Loading';
import Courses from '../components/home/Courses';

export const CourseContext = React.createContext();

function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const {reducer, initialState} = useShare();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getCourses = async () => {
      dispatch({type: 'init'});
      console.log(state.loading);
      try {
        let response = await fetch(`${Api}`);
        let responseJson = await response.json();
        dispatch({type: 'success'});
        console.log(responseJson, state.error);
        setData(responseJson);
      } catch (error) {
        // console.error('error', error);
        dispatch({type: 'failure'});
      }
    };

    getCourses();
  }, []);
  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <NoData />;
  }

  return (
    <ScrollView style={styles.container}>
      <CourseContext.Provider
        value={{courses: data.recommendedCourse, navigation: navigation}}>
        <HeaderSlides />
      </CourseContext.Provider>
      <Courses
        title={'课程发布日历'}
        courses={data.calendarCourse}
        navigation={navigation}
      />
      <Courses
        title={'入门课程'}
        courses={data.introductoryCourse}
        navigation={navigation}
      />
      <Courses
        title={'完结课程'}
        courses={data.completedCourse}
        navigation={navigation}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
