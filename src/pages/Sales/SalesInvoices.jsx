import React, { Component } from 'react';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class SalesInvoices extends Component {
  render() {
    const header = {
      img: 'https://img.icons8.com/dusk/64/000000/purchase-order.png',
      title: 'Facturas',
      subtitle: 'Listado de facturas de venta',
      buttonLabel: 'Facturar Venta',
      buttonURL: '/ventas/facturar/nuevo',
      button: true
    };
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

    return <FullDataTable header={header} table={{ rows: [], columns }} />;
  }
}

export default SalesInvoices;
