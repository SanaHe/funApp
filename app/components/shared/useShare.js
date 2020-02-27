import * as React from 'react';

const useShare = () => {
  const initialState = {
    loading: false,
    error: false,
    courses: [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'init':
        return {
          ...state,
          loading: true,
          error: false,
        };
      case 'success':
        return {
          ...state,
          loading: false,
          error: false,
        };
      case 'failure':
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        throw new Error();
    }
  };
  return {initialState, reducer};
};

export default useShare;
