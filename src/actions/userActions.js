import { usersType } from '../actionTypes';

const userActions = {
    userList: payload => ({
        type: usersType.list,
        payload
    }),
};

export default userActions;