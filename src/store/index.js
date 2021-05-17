import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from '../middlewares/thunk';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  thunk,
];

const appMiddleware = applyMiddleware(...middlewares);

export default createStore(reducer, composer(appMiddleware));

