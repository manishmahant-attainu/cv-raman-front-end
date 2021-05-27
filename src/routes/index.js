import PATHS from '../config/webPath';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Login from '../containers/Login';
import VideoDetails from '../containers/VideoDetails';

const routes = [
  { path: PATHS.HOME, exact:true, component: Home },
  { path: PATHS.PROFILE, exact:true, component: Profile },
  { path: PATHS.LOGIN, exact:true, component: Login },
  { path: PATHS.VIDEO_DETAILS, exact:true, component: VideoDetails },
];

export default routes;
