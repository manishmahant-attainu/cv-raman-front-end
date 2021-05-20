import { combineReducers } from 'redux';
import search from './search';
import loader from './loader';
import videos from './videos';

export default combineReducers({
  search,
  loader,
  videos,
});
