import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout';
import { LanguageStore } from './contexts/LanguageContext';
import { DataStore } from './contexts/StoreContext';

import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <DataStore>
        <LanguageStore>
          <Layout>
            <Switch>
              {
                routes.map((route,rk) => {
                  return (
                    <Route key={rk} {...route} />
                  );
                })
              }
            </Switch>
          </Layout>
        </LanguageStore>
      </DataStore>
    </BrowserRouter>

  );
};

export default App;
