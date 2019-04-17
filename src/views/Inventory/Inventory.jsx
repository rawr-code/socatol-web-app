import React, { Component } from 'react';
import FeatureBar from '../../components/Layout/FeatureBar';
import FeatureBarTabs from '../../components/Layout/FeatureBarTabs';
import MainContainer from '../../components/Layout/MainContainer';

// Tabs Views
import AllWarehouses from './Warehouse/AllWarehouses';
import AllProducts from './Product/AllProducts';

class Inventory extends Component {
  state = {
    value: 0,
    tabs: [
      {
        label: 'Almacenes'
      },
      { label: 'Productos' }
    ]
  };

  handleOnChangeTab = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { value, tabs } = this.state;
    return (
      <>
        <FeatureBar title="Inventario" />
        <FeatureBarTabs
          tabs={tabs}
          value={value}
          onChange={this.handleOnChangeTab}
        />
        <MainContainer>
          {value === 0 && <AllWarehouses />}
          {value === 1 && <AllProducts />}
        </MainContainer>
      </>
    );
  }
}

export default Inventory;
