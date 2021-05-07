import { PATHS } from "../config/webPath";
import Home from "../containers/Home";
import PageNotFound from "../containers/PageNotFound";
import Products from "../containers/Products";

 
const routes = [
    { exact: true, path: PATHS.HOME, component: Home },
    { exact: true, path: PATHS.PRODUCTS, component: Products },
    { exact: true, path: '*', component: PageNotFound },
];

export default routes;
