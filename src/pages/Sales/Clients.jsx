import React, { Component } from 'react';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class Clients extends Component {
  render() {
    const header = {
      img: 'https://img.icons8.com/dusk/64/000000/conference.png',
      title: 'Clientes',
      subtitle: 'Listado de clientes',
      buttonLabel: 'Agregar Cliente',
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

export default Clients;
