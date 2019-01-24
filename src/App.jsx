import React from 'react';

// Configuration
import { MUICustomTheme } from './config';

import Layout from './components/Layout';
import ListItems from './components/ListItems';
import ItemDetails from './components/ItemDetails';

const App = () => (
  <MUICustomTheme>
    <Layout>
      <div style={{ display: 'flex' }}>
        <ListItems />
        <ItemDetails />
      </div>
    </Layout>
  </MUICustomTheme>
);

export default App;
