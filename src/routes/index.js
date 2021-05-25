import PATHS from '../config/webPath';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Login from '../containers/Login';

const routes = [
  { path: PATHS.HOME, exact:true, component: Home },
  { path: PATHS.PROFILE, exact:true, component: Profile },
  { path: PATHS.LOGIN, exact:true, component: Login },
];

export default routes;
