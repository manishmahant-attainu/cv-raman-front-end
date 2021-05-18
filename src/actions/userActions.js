import { usersType } from '../actionTypes';

const userActions = {
    userList: payload => ({
        type: usersType.list,
        payload
    }),

    listing: (id) => (dispatch) => {
        const path = id ?
            `https://jsonplaceholder.typicode.com/users/${id}` :
            'https://jsonplaceholder.typicode.com/users';
        return fetch(path)
            .then(res => res.json())
            .then(data => {
                data = id ? [data]: data;
                dispatch(userActions.userList(data));
            })
    },
};

export default userActions;