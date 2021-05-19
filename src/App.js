import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout';

import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {
            routes.map((route,rk) => {
              return (
                <Route key={rk} {...route} />
              )
            })
          }
        </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
