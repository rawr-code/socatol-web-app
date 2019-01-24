import React from 'react';

import Navbar from './Navbar';
import SideNavbar from './SideNavbar';

import Inventory from '../containers/Inventory';

const Layout = () => (
  <div style={{ display: 'flex' }}>
    <Navbar />
    <SideNavbar />
    <main style={{ flexGrow: 1, marginTop: 64, display: 'flex' }}>
      <Inventory />
    </main>
  </div>
);

export default Layout;
