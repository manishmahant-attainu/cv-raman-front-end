import { counterType } from '../actionTypes';

const counterActions = {
    increment:  payload => ({
        type: counterType.increment,
        payload
    }),
    decrementAction: payload => ({
        type: counterType.decrement,
        payload
    }),
};

export default counterActions;
