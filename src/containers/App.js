import { Route, BrowserRouter, Switch } from 'react-router-dom';

import routes from '../routes';

import Layout from './Layout';

const App = () => {

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
