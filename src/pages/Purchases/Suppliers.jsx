import React, { Component } from 'react';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class Suppliers extends Component {
  render() {
    const header = {
      img: 'https://img.icons8.com/dusk/64/000000/supplier.png',
      title: 'Proveedores',
      subtitle: 'Listado de proveedores',
      buttonLabel: 'Agregar Proveedor',
      buttonURL: '/compras/proveedor/nuevo',
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

export default Suppliers;
