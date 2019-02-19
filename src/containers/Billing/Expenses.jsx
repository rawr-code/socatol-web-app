import React, { Component } from 'react';

// Material UI
import { Typography, Button } from '@material-ui/core';

// Components
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class ExpensesContainer extends Component {
  render() {
    return (
      <div>
        <DataTableHeader
          title="Ventas"
          subtitle="Lista de facturas de venta"
          bottonLabel="Facturar Venta"
        />
        <DataTable />
      </div>
    );
  }
}

export default ExpensesContainer;
