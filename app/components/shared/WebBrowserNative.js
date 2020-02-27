import * as React from 'react';
import {
  Platform,
  ProgressViewIOS,
  ProgressBarAndroid,
  StyleSheet,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Colors from '../../constants/Colors';

const ProgressBar = props => {
  return {
    ...Platform.select({
      ios: () => (
        <ProgressViewIOS
          progressTintColor={Colors.primary}
          trackTintColor={Colors.white}
          progress={props.progress}
        />
      ),
      android: () => (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          color={Colors.primary}
          indeterminate={false}
          progress={props.progress}
        />
      ),
    })(),
  };
};

const WebBrowser = props => {
  const [progress, setProgress] = React.useState(0);
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <WebView
        source={{uri: props.uri}}
        onLoadProgress={({nativeEvent}) => {
          //设置percent为0...1，有小数
          setProgress(nativeEvent.progress);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default WebBrowser;
