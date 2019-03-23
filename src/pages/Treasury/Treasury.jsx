import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/Layout/FeatureBar';
import TabsBar from '../../components/Layout/TabsBar';

// Containers
import BankAccounts from './BankAccounts';

class Treasury extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Cuentas Bancarias', 'Conciliar'];
    return (
      <Fragment>
        <FeatureBar title="Gestión de Tesorería" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <BankAccounts />}
        {value === 1 && <div>Conciliar</div>}
      </Fragment>
    );
  }
}

export default Treasury;
