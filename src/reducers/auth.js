import { authTypes } from '../actionTypes';

const initialState = false;

const auth = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case authTypes.login:
      return true;
    case authTypes.logout:
      return false;
    default:
      return state;
  }
};

export default auth;