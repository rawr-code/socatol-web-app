import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/FeatureBar';
import TabsBar from '../../components/TabsBar';

// Containers
import BankAccounts from './BankAccounts';
import NewBankAccount from './NewBankAccount';

class Treasury extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Cuentas bancarias', 'otras cuentas'];
    return (
      <Fragment>
        <FeatureBar title="Tesorería" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <BankAccounts />}
        {value === 1 && <NewBankAccount />}
      </Fragment>
    );
  }
}

export default Treasury;
