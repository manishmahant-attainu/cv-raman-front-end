import { authTypes } from '../actionTypes';

const authAction = {
  login: () => ({type: authTypes.login}),
  logout: () => ({type: authTypes.logout}),
};

export default authAction;
