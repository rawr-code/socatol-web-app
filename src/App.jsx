import React from 'react';
import { Switch } from 'react-router-dom';

// Configuration
import { MUICustomTheme } from './config';

// Components
import Layout from './components/Layout';
import { PublicRoute, PrivateRoute } from './components';

// Containers
import { Login } from './containers/Auth';

const Home = () => {
  return <div>Home</div>;
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
