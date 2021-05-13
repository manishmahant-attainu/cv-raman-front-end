import { productsType } from '../actionTypes';

const initialState = [];
const products = (state,action) => {
    state = state || initialState;
    switch (action.type) {
        case productsType.list:
            return [ ...action.payload ]
    
        default:
            return state;
    }
};

export default products;
