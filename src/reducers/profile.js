import { profileTypes } from '../actionTypes';

const storedInfo = JSON.parse(localStorage.getItem('profileInfo')) || {}
const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  googleId: "",
  imageUrl: "",
  fullName: "",
  ...storedInfo
};


const profile = (state, action) => {
  state = state?.email ? state : initialState;
  switch (action.type) {
    case profileTypes.getDetails: {
      const userData = {
        email: action.payload.email,
        firstName: action.payload.givenName,
        lastName: action.payload.familyName,
        googleId: action.payload.googleId,
        imageUrl: action.payload.imageUrl,
        fullName: action.payload.name
      }
      localStorage.setItem('profileInfo',JSON.stringify(userData));
      return userData;
    }
    case profileTypes.getUserInfo: {
      const userData = {
        ...action.payload,
        fullName: `${action.payload.firstName} ${action.payload.lastName}`.trim()
      };
      localStorage.setItem('profileInfo',JSON.stringify(userData));
      return userData;
    }
    case profileTypes.removeDetails: {
      localStorage.removeItem('profileInfo');
      return {
        _id: "",
        email: "",
        firstName: "",
        lastName: "",
        googleId: "",
        imageUrl: "",
        fullName: "",
      };
    }
    default:
      return state;
  }
};

export default profile;
