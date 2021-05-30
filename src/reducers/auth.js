import { authTypes } from '../actionTypes';

//Here the value was stored just once when page was loaded
//it remained  same no matter what was in locastorage
// const initialState = !!localStorage.getItem('isAuth');

const auth = (state, action) => {

  state = state || !!localStorage.getItem('isAuth');

  switch (action.type) {
  case authTypes.login: {
    localStorage.setItem('isAuth',true);
    return true;
  }
  case authTypes.logout: {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('profileInfo');
    return false;
  }
  default:
    return state;
  }
};

export default auth;
