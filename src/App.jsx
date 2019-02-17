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

const Home = () => <div>Home</div>;

const App = () => {
  return (
    <MUICustomTheme>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} layout={Layout} />
        <PrivateRoute path="/productos" component={Inventory} layout={Layout} />
        <PrivateRoute path="/tesoreria" component={Treasury} layout={Layout} />
      </Switch>
    </MUICustomTheme>
  );
};

export default App;
