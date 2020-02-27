import * as React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

function Loading() {
  return (
    <ActivityIndicator
      size="small"
      color={Colors.primary}
      style={styles.loadingStyle}
    />
  );
};
const styles = StyleSheet.create({
  loadingStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
