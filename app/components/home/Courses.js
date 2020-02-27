import * as React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
// import Colors from '../../constants/Colors';

function Courses(props) {
  const {title, courses, navigation} = props;

  const renderCourse = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Course', {id: item.id});
      }}>
      <View
        style={[
          styles.courseDefault,
          index == 0 ? styles.courseFirst : '',
          index == courses.length - 1 ? styles.courseLast : '',
        ]}>
        <Image source={{uri: item.image}} style={styles.courseImage} />
        <View style={styles.titleWrapper}>
          <Text style={styles.courseTitle}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.courses}>
      <View style={styles.content}>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  courses: {
    marginBottom: 50,
  },
  recommendedCourses: {
    marginBottom: 30,
    marginTop: 50,
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  courseDefault: {
    position: 'relative',
    width: 206,
    marginLeft: 8,
  },
  courseFirst: {
    marginLeft: 15,
  },
  courseLast: {
    marginRight: 15,
  },
  courseImage: {
    width: 206,
    height: 160,
    borderRadius: 5,
  },
  titleWrapper: {
    marginTop: 6,
    height: 40,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 16,
  },
  data: {
    color: '#63a4b7',
    fontSize: 12,
    marginTop: 6,
  },
});

export default Courses;
