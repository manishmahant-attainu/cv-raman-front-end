import { counterType, productsType } from '../actionTypes';

const initialState = {
    counter: {
        counter: 0,
        data: {}
    },
    products: [],
    users: []
};

const reducer = (state,action) => {
    state = state || initialState;
    switch (action.type) {
        case counterType.increment:
            return {
                ...state,
                counter: {
                    counter: state.counter + 1,
                    data: action.payload || state.data
                }
            }
        
        case productsType.list:
            return {
                counter: state.counter - 1,
                data: action.payload || state.data
            }
    
        default:
            return state;
    }

    // OR
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

export default reducer;
