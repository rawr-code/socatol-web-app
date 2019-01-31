import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import MUICustomTheme from './MUICustomTheme';

// Components
import Layout from './components/Layout';

import { PublicRoute, PrivateRoute } from './components';

// Containers
import { Login } from './containers/Auth';
import Products from './containers/Products';

const Home = () => <div>Home</div>;

const App = props => {
  return (
    <MUICustomTheme>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} layout={Layout} />
        <PrivateRoute path="/productos" component={Products} layout={Layout} />
      </Switch>
    </MUICustomTheme>
  );
};

export default App;
