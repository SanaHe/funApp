import * as React from 'react';
import {HeaderStyleInterpolators} from '@react-navigation/stack';

const BaseOption = title => {
  return {
    title: title,
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  };
};

export default BaseOption;
