import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Configuration
import { MUICustomTheme, store } from './config';

// Components
import { PrivateRoute, appRoutes } from './components/routes';

import Login from './containers/Auth/AuthContainer';

// import Layout from "./Layout";

// DevComponents
import Layout from './Layout';

// Routes
const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <MUICustomTheme>
          <main>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute path="/" component={Layout} routes={appRoutes} />
              <Redirect to="/login" />
            </Switch>
          </main>
        </MUICustomTheme>
      </BrowserRouter>
    </Provider>
  );

export default App;
