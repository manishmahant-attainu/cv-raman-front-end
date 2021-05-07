import { Route, BrowserRouter, Switch } from 'react-router-dom';

import routes from '../routes';

import Layout from './Layout';

const App = () => {

    //Is the way to access the route
    //Another is defining the routes


    //Reaming things:
    // 1. Dynamic Routing
    // 2. Programatical Routing
    return (
        <BrowserRouter>
            <Layout title="hello routes">
                <Switch>
                    {
                        routes.map((route, i) => {
                            return (
                                <Route key={i} {...route} />
                            )
                        }) 
                    }
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
