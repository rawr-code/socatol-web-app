import React, { Component, Fragment } from 'react';

// Components
import FeatureBar from '../../components/FeatureBar';
import TabsBar from '../../components/TabsBar';

// Containers
import Income from './Income';
import Expenses from './Expenses';

class Billing extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const labels = ['Compras', 'Ventas'];
    return (
      <Fragment>
        <FeatureBar title="Facturación" />
        <TabsBar
          value={value}
          handleChange={this.handleChange}
          labels={labels}
        />
        {value === 0 && <Income match={this.props.match} />}
        {value === 1 && <Expenses />}
      </Fragment>
    );
  }
}

export default Billing;
