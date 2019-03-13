import React, { Component } from 'react';

// Components
import CardContainer from '../../components/CardContainer';
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class ExpensesContainer extends Component {
  render() {
    const columns = [
      {
        name: 'name',
        title: 'Nombre'
      },
      {
        name: 'stock',
        title: 'Stock'
      },
      {
        name: 'iva',
        title: 'IVA'
      },
      {
        name: 'price',
        title: 'Precio'
      }
    ];
    return (
      <CardContainer>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/purchase-order.png"
          title="Ventas"
          subtitle="Lista de facturas de venta"
          buttonLabel="Facturar Venta"
          button
        />
        <DataTable columns={columns} rows={[]} />
      </CardContainer>
    );
  }
}

export default ExpensesContainer;
