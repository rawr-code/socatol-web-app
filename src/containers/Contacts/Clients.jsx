import React, { Component } from 'react';

// Components
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class ClientsContainer extends Component {
  render() {
    return (
      <div>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/conference.png"
          title="Clientes"
          subtitle="Lista de clientes"
          buttonLabel="Agregar Cliente"
        />
        <DataTable />
      </div>
    );
  }
}

export default ClientsContainer;
