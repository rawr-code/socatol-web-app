import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import MUICustomTheme from './MUICustomTheme';

// Components
import { PublicRoute, PrivateRoute } from './components';

// Containers
import { Login } from './containers/Auth';
import Layout from './containers/Layout';
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
    <MUICustomTheme>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} layout={Layout} />
        <PrivateRoute path="/tesoreria" component={Treasury} layout={Layout} />
        {/* Invnetory */}
        <PrivateRoute
          path="/almacenes"
          component={Warehouses}
          layout={Layout}
        />
        <PrivateRoute path="/productos" component={Products} layout={Layout} />
        {/* Billing */}
        <PrivateRoute path="/compras" component={Income} layout={Layout} />
        <PrivateRoute path="/ventas" component={Expenses} layout={Layout} />
        {/* Contacts */}
        <PrivateRoute path="/clientes" component={Clients} layout={Layout} />
        <PrivateRoute
          path="/proveedores"
          component={Suppliders}
          layout={Layout}
        />
      </Switch>
    </MUICustomTheme>
  );
};

export default App;
