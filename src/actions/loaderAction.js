import { loaderTypes } from '../actionTypes';

const loaderAction = {
  start: () => ({type: loaderTypes.start}),
  stop: () => ({type: loaderTypes.stop}),
};

export default loaderAction;
