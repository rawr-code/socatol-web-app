import React from 'react';

import WarehouseContainer from '../containers/InventoryManagement/WarehouseContainer';
import Navbar from './Navbar';
import SideNavbar from './SideNavbar';

const Layout = () => (
  <div style={{ display: 'flex' }}>
    <Navbar />
    <SideNavbar />
    <main style={{ flexGrow: 1, marginTop: 64, display: 'flex' }}>
      <WarehouseContainer />
    </main>
  </div>
);

export default Layout;
