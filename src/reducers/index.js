import { counter } from '../actionTypes';

const initialState = {
    counter: 0,
    data: {}
};
const reducer = (state,action) => {
    state = state || initialState;
    if(action.type === counter.increment) {
        return {
            counter: state.counter + 1,
            data: action.payload || state.data
        }
    }
    if(action.type === counter.decrement) {
        return {
            counter: state.counter - 1,
            data: action.payload || state.data
        }
    }
    if(action.type === 'data') {
        return {
            counter: state.counter,
            data: action.payload
        }
    }
    return state;
};

export default reducer;
