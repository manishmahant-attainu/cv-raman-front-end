import { videosTypes } from '../actionTypes';

const initialState = [];

const videos = (state, action) => {
  state = state || initialState;
  if(action.type === videosTypes.list) {
    return action.payload;
  } else {
    return state;
  }
};

export default videos;
