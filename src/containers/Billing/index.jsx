import React, { Component } from 'react';

// Components
import Income from './Income';
import Expenses from './Expenses';

class BillingContainer extends Component {
  render() {
    return (
      <div>
        <Income />
        {/* <Expenses /> */}
      </div>
    );
  }
}

export default BillingContainer;
