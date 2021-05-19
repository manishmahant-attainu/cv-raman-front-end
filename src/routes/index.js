import PATHS from '../config/webPath';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const routes = [
  { path: PATHS.HOME, exact:true, component: Home },
  { path: PATHS.PROFILE, exact:true, component: Profile },
];

export default routes;
