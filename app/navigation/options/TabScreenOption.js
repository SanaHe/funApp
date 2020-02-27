import * as React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// TabStack 配置
const TabScreenOption = route => {
  let labelName;
  let iconName;

  switch (route.name) {
    case 'Home':
      labelName = '发现';
      iconName = 'compass';
      break;
    case 'Video':
      labelName = '视频';
      iconName = 'directions';
      break;
    case 'Guide':
      labelName = '文档';
      iconName = 'layers';
      break;
    case 'Forum':
      labelName = '社区';
      iconName = 'bubble';
      break;
    default:
      labelName = '我的';
      iconName = 'user';
  }
  return {
    tabBarLabel: labelName,
    tabBarIcon: ({focused, tintColor}) => (
      <SimpleLineIcons name={iconName} size={25} color={tintColor} />
    ),
  };
};

export default TabScreenOption;
