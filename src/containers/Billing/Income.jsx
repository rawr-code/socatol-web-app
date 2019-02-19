import React, { Component } from 'react';

// Material UI
import { Typography, Button } from '@material-ui/core';

// Components
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class IncomeContainer extends Component {
  render() {
    return (
      <div>
        <DataTableHeader
          title="Compras"
          subtitle="Lista de facturas de compras"
          bottonLabel="Facturar Compra"
        />
        <DataTable />
      </div>
    );
  }
}

export default IncomeContainer;
