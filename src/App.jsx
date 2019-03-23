import React from 'react';
import { Switch } from 'react-router-dom';

// Material UI Custom Theme
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Blue } from './themes';

// Routes
import { PublicRoute, PrivateRoute } from './routes';

// Atoms
import MainContainer from './components/Atoms/MainContainer';

// Molecules
// Organisms

// Pages
import Login from './pages/Auth/Login';
import Sales from './pages/Sales';
import Purchases from './pages/Purchases';
import Inventory from './pages/Inventory';
import Treasury from './pages/Treasury';

// Containers
import Layout from './components/Layout';

const Home = () => <div>Home</div>;

const App = () => {
  return (
    <MuiThemeProvider theme={Blue}>
      <CssBaseline />
      <MainContainer>
        <Layout />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute path="/ventas" component={Sales} />
          <PrivateRoute path="/compras" component={Purchases} />
          <PrivateRoute path="/tesoreria" component={Treasury} />
          <PrivateRoute path="/inventario" component={Inventory} />
          <PrivateRoute component={() => <div>error 404 no match </div>} />
        </Switch>
      </MainContainer>
    </MuiThemeProvider>
  );
};

export default App;
