import { combineReducers } from 'redux';

import counter from './counter';
import products from './products';
import users from './users';


export default combineReducers({
    counter,
    products,
    users
});
