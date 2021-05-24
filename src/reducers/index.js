import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import search from './search';
import loader from './loader';
import videos from './videos';

export default combineReducers({
  auth,
  profile,
  search,
  loader,
  videos,
});
