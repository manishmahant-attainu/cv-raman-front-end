import { PATHS } from "../config/webPath";
import Home from "../containers/Home";
import PageNotFound from "../containers/PageNotFound";
import Products from "../containers/Products";
import UserInfo from "../containers/UserInfo";
import Users from "../containers/Users";

 
const routes = [
    { exact: true, path: PATHS.HOME, component: Home },
    { exact: true, path: PATHS.USERS, component: Users },
    { exact: true, path: PATHS.USERINFO, component: UserInfo },
    { exact: true, path: PATHS.PRODUCTS, component: Products },
    { exact: true, path: '*', component: PageNotFound },
];

export default routes;
