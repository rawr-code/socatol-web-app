import React, { Component } from 'react';

// Components
import Income from './Income';
// import Expenses from './Expenses';
import HeaderImage from '../../components/HeaderImage';

class BillingContainer extends Component {
  render() {
    return (
      <div>
        <HeaderImage
          img="https://img.icons8.com/dusk/64/000000/estimate.png"
          title="Facturación"
          subtitle="Gestión de ingresos y gastos"
        />
        <button>Ingresos</button>
        <button>Gastos</button>
        <div style={{ padding: 24 }}>
          <Income />
        </div>
      </div>
    );
  }
}

export default BillingContainer;
