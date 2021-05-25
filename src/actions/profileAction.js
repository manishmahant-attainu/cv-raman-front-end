import { profileTypes } from '../actionTypes';

const profileAction = {
  getUserInfo: (payload) => ({type: profileTypes.getUserInfo, payload}),
  getDetails: (payload) => ({type: profileTypes.getDetails, payload}),
  removeDetails: () => ({type: profileTypes.removeDetails}),
}

export default profileAction;
