import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/Layout/FeatureBar';
import TabsBar from '../../components/Layout/TabsBar';

// Containers
import Warehouses from './Warehouses';
import Products from './Products';

class Inventory extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Almacenes', 'Productos'];
    return (
      <Fragment>
        <FeatureBar title="Inventario" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <Warehouses />}
        {value === 1 && <Products />}
      </Fragment>
    );
  }
}

export default Inventory;