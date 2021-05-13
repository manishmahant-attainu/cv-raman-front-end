import { usersType } from '../actionTypes';

const initialState = [];
const users = (state,action) => {
    state = state || initialState;
    switch (action.type) {
        case usersType.list:
            return [ ...action.payload ]
    
        default:
            return state;
    }
};

export default users;
