import React, { Component } from 'react';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class PurchaseInvoices extends Component {
  render() {
    const header = {
      img: 'https://img.icons8.com/dusk/64/000000/purchase-order.png',
      title: 'Facturas',
      subtitle: 'Listado de facturas de compra',
      buttonLabel: 'Facturar Compra',
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

export default PurchaseInvoices;
