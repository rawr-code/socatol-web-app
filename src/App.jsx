import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

// Configuration
import { PrivateRoute, PublicRoute } from './components/routes';
import { MUICustomTheme, store } from './config';

// Components
import Layout from './Layout';
import Login from './containers/Auth/AuthContainer';

// Routes
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MUICustomTheme>
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/" component={Layout} />
          <Redirect to="/login" />
        </Switch>
      </MUICustomTheme>
    </BrowserRouter>
  </Provider>
);

export default App;
