import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/FeatureBar';
import TabsBar from '../../components/TabsBar';

// Containers
import Clients from './Clients';
import Suppliders from './Suppliders';

class Contacts extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Clientes', 'Proveedores'];
    return (
      <Fragment>
        <FeatureBar title="Contactos" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <Clients />}
        {value === 1 && <Suppliders />}
      </Fragment>
    );
  }
}

export default Contacts;
