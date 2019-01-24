import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

// Configuration
import { PrivateRoute, PublicRoute } from './components/routes';
import { MUICustomTheme, store } from './config';

import Layout from './Layout';

const Aja = () => {
  return <div>interfaz</div>;
};

// Routes
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MUICustomTheme>
        <Switch>
          <PublicRoute path="/login" component={Aja} />
          <PrivateRoute path="/" component={Layout} />
          <Redirect to="/login" />
        </Switch>
      </MUICustomTheme>
    </BrowserRouter>
  </Provider>
);

export default App;
