import { searchTypes } from '../actionTypes';

const initialState = '';

const search = (state, action) => {
  state = state || initialState;
  if(action.type === searchTypes.search){
    return action.payload;
  } else {
    return state;
  }
};

export default search;
