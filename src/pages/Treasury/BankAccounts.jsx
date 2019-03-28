import React, { Component } from 'react';

// Organisms
import FullDataTable from '../../components/Organisms/FullDataTable';

class BankAccounts extends Component {
  render() {
    const header = {
      img: 'https://img.icons8.com/dusk/64/000000/merchant-account.png',
      title: 'Cuentas Bancarias',
      subtitle: 'Listado de cuentas bancarias',
      buttonLabel: 'Agregar Cuenta',
      buttonURL: '/tesoreria/cuenta/nuevo',
      button: true
    };
    const columns = [
      {
        name: 'name',
        title: 'Nombre'
      },
      {
        name: 'bank',
        title: 'Banco'
      },
      {
        name: 'number',
        title: 'Número de cuenta'
      },
      {
        name: 'type',
        title: 'Tipo'
      }
    ];

    return <FullDataTable header={header} table={{ rows: [], columns }} />;
  }
}

export default BankAccounts;
