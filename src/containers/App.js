import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import Products from './Products';

const App = () => {

    //Is the way to access the route
    //Another is defining the routes
    return (
        <BrowserRouter>
            <Layout title="hello routes">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={Products} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
