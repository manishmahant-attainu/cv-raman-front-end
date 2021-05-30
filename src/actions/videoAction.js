import { videosTypes } from '../actionTypes';
import googleConfig from '../config/google.json';
import loaderAction from './loaderAction';

const videoAction = {
  list: (search) => (dispatch) => {
    dispatch(loaderAction.start());
    const params = new URLSearchParams({
      q: search,
      part: 'snippet',
      maxResults: 50,
      key: googleConfig.apiKey
    });
    const path = `https://www.googleapis.com/youtube/v3/search?${params}`;
    return fetch(path)
      .then(res=>res.json())
      .then(data=>{
        dispatch({
          type: videosTypes.list,
          payload: data.items
        });
        dispatch(loaderAction.stop());
      })
      .catch(()=>dispatch(loaderAction.stop()));
  }
};

export default videoAction;
