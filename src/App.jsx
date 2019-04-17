import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

// Material UI Custom Theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themes/Blue';

// Layout
import Layout from './components/Layout';

// Views
import Incomes from './views/Incomes';
import Inventory from './views/Inventory';
import Expenses from './views/Expenses';

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path="/ingresos" component={Incomes} />
            <Route path="/gastos" component={Expenses} />
            <Route path="/inventario" component={Inventory} />
          </Switch>
        </Layout>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default App;
