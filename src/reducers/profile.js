import { profileTypes } from '../actionTypes';

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  googleId: "",
  imageUrl: "",
  fullName: ""
};

const profile = (state, action) => {
  state = state?.email ? state : initialState;
  switch (action.type) {
    case profileTypes.getDetails:
      return {
        email: action.payload.email,
        firstName: action.payload.givenName,
        lastName: action.payload.familyName,
        googleId: action.payload.googleId,
        imageUrl: action.payload.imageUrl,
        fullName: action.payload.name
      }
    case profileTypes.removeDetails:
      return initialState;
    default:
      return state;
  }
};

export default profile;
