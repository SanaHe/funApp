import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../../constants/Colors';
import {CourseContext} from '../../screens/HomeScreen';

const Slides = () => {
  let slidePages = null;
  const {courses, navigation} = useContext(CourseContext);

  if (courses && courses.length > 0) {
    slidePages = (
      <Swiper
        loop={true}
        showsButtons={false}
        dotColor={'#999'}
        activeDotColor={Colors.primary}
        paginationStyle={{marginBottom: 12}}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.dotStyle}
        removeClippedSubviews={false}>
        {courses.map((course, index) => (
          <TouchableWithoutFeedback
            key={course.id}
            onPress={() => {
              navigation.navigate('Course', {id: course.id});
            }}>
            <View style={styles.slide}>
              <Image source={{uri: course.image}} style={styles.image} />
              <Text style={styles.data}>{course.createdAt}</Text>
              <Text style={styles.title}>{course.name}</Text>
              <Text style={styles.title}>{course.body}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </Swiper>
    );
  }
  return <View style={styles.slides}>{slidePages}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    color: '#63a4b7',
    fontSize: 26,
    marginBottom: 18,
    marginTop: 28,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  slides: {
    height: 362,
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  slide: {
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
  },
  dotStyle: {
    height: 7,
    width: 7,
  },

  name: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 210,
    borderRadius: 5,
  },
  data: {
    color: '#63a4b7',
    fontSize: 12,
    marginBottom: 4,
    marginTop: 6,
  },
  title: {
    fontSize: 18,
  },
});

export default function HeaderSlides(props) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.head}>发现</Text>
        <Text style={styles.heading}>推荐</Text>
      </View>
      <Slides />
    </View>
  );
}
