import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/Layout/FeatureBar';
import TabsBar from '../../components/Layout/TabsBar';

// Containers
import SalesInvoices from './SalesInvoices';
import Clients from './Clients';

class Sales extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Facturas', 'Clientes'];
    return (
      <Fragment>
        <FeatureBar title="Gestión de ventas" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <SalesInvoices />}
        {value === 1 && <Clients />}
      </Fragment>
    );
  }
}

export default Sales;
