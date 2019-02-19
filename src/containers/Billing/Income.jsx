import React, { Component } from 'react';

// Components
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class IncomeContainer extends Component {
  render() {
    return (
      <div>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/purchase-order.png"
          title="Compras"
          subtitle="Lista de facturas de compras"
          buttonLabel="Facturar Compra"
        />
        <DataTable />
      </div>
    );
  }
}

export default IncomeContainer;
