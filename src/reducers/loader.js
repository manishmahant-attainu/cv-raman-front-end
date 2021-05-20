import { loaderTypes } from '../actionTypes';

const initialState = false;

const loader = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case loaderTypes.start:
      return true;
    case loaderTypes.stop:
      return false;
    default:
      return state;
  }
};

export default loader;
