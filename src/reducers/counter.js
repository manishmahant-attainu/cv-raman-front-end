import { counterType } from '../actionTypes';

const initialState = 0;
const counter = (state,action) => {
    state = state || initialState;
    
    switch (action.type) {
        case counterType.increment:
            return state + 1
        
        case counterType.decrement:
            return state - 1
    
        default:
            return state;
    }

    // OR
    // initialState = {
    //    counter: 0, data: {}
    // }
    // if(action.type === counter.increment) {
    //     return {
    //         counter: state.counter + 1,
    //         data: action.payload || state.data
    //     }
    // }
    // if(action.type === counter.decrement) {
    //     return {
    //         counter: state.counter - 1,
    //         data: action.payload || state.data
    //     }
    // }
    // return state;
};

export default counter;
