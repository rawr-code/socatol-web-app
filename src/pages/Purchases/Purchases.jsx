import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/Layout/FeatureBar';
import TabsBar from '../../components/Layout/TabsBar';

// Containers
import PurchaseInvoices from './PurchaseInvoices';
import Suppliers from './Suppliers';

class Purchases extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Facturas', 'Proveedores'];
    return (
      <Fragment>
        <FeatureBar title="Gestión de compras" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <PurchaseInvoices />}
        {value === 1 && <Suppliers />}
      </Fragment>
    );
  }
}

export default Purchases;
