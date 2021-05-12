import { counter } from '../actionTypes';

export const incrementAction = payload => ({
    type: counter.increment,
    payload
});

export const decrementAction = payload => ({
    type: counter.decrement,
    payload
});
