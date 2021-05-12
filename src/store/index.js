import { createStore, compose } from 'redux';

import reducer from '../reducers';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composer());

