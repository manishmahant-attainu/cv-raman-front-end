import { counterType } from '../actionTypes';

const counterActions = {
    increment:  payload => ({
        type: counterType.increment,
        payload
    }),
    decrement: payload => ({
        type: counterType.decrement,
        payload
    }),
};

export default counterActions;
