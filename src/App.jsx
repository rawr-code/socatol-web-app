import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Blue } from './themes';

// Components
import { PublicRoute, PrivateRoute } from './components';
import Appbar from './components/Appbar';
import SideNav from './components/SideNav';
import MainContainer from './components/MainContainer';

// Containers
import { Login } from './containers/Auth';
import Inventory from './containers/Inventory';

import Treasury from './containers/Treasury';

// Billing
import Income from './containers/Billing/Income';
import Expenses from './containers/Billing/Expenses';

// Inventory
import Products from './containers/Inventory/Products';
import Warehouses from './containers/Inventory/Warehouses';

// Contacts
import Clients from './containers/Contacts/Clients';
import Suppliders from './containers/Contacts/Suppliders';

const Home = () => <div>Home</div>;

const App = () => {
  return (
    <MuiThemeProvider theme={Blue}>
      <CssBaseline />
      <SideNav selectedItem={0} />
      <MainContainer>
        <Appbar />
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/tesoreria" component={Treasury} />
          {/* Inventory */}
          <PrivateRoute path="/inventario" component={Inventory} />
          <PrivateRoute path="/almacenes" component={Warehouses} />
          <PrivateRoute path="/productos" component={Products} />
          {/* Billing */}
          <PrivateRoute path="/compras" component={Income} />
          <PrivateRoute path="/ventas" component={Expenses} />
          {/* Contacts */}
          <PrivateRoute path="/clientes" component={Clients} />
          <PrivateRoute path="/proveedores" component={Suppliders} />
        </Switch>
      </MainContainer>
    </MuiThemeProvider>
  );
};

export default App;
