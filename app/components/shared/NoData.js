import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function NoData() {
  return (
    <View style={styles.notice}>
      <SimpleLineIcons name={'drawer'} size={100} color={'#ddd'} />
      <Text style={styles.noticeMsg}>没有记录</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notice: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noticeMsg: {
    color: '#999',
  },
});

export default NoData;
