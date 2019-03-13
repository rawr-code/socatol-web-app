import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Blue } from './themes';

// Components
import { PublicRoute, PrivateRoute } from './components';
import MainContainer from './components/MainContainer';

// Containers
import Layout from './containers/Layout';

import { Login } from './containers/Auth';
import Treasury from './containers/Treasury';
import Billing from './containers/Billing';
import Inventory from './containers/Inventory';
import Contacts from './containers/Contacts';

const Home = () => <div>Home</div>;

const App = () => {
  return (
    <MuiThemeProvider theme={Blue}>
      <CssBaseline />
      <MainContainer>
        <Layout />
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/tesoreria" component={Treasury} />
          <PrivateRoute path="/facturacion" component={Billing} />
          <PrivateRoute path="/inventario" component={Inventory} />
          <PrivateRoute path="/contactos" component={Contacts} />
        </Switch>
      </MainContainer>
    </MuiThemeProvider>
  );
};

export default App;
