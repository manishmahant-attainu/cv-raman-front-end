import { profileTypes } from '../actionTypes';

const profileAction = {
  getDetails: (payload) => ({type: profileTypes.getDetails, payload}),
  removeDetails: () => ({type: profileTypes.removeDetails}),
}

export default profileAction;
