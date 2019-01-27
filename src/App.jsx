import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import MUICustomTheme from './MUICustomTheme';

// Components
import Layout from './components/Layout';
import ListItems from './components/ListItems';
import ItemDetails from './components/ItemDetails';

import { PublicRoute, PrivateRoute } from './components';

// Containers
import { Login } from './containers/Auth';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ListItems />
      <ItemDetails />
    </div>
  );
};

const App = props => {
  return (
    <MUICustomTheme>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <Layout>
          <PrivateRoute path="/" component={Home} />
        </Layout>
      </Switch>
    </MUICustomTheme>
  );
};

export default App;
