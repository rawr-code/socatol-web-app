import React, { Component } from 'react';

// Components
import CardContainer from '../../components/CardContainer';
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class ClientsContainer extends Component {
  render() {
    return (
      <CardContainer>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/conference.png"
          title="Clientes"
          subtitle="Lista de clientes"
          buttonLabel="Agregar Cliente"
          button
        />
        <DataTable />
      </CardContainer>
    );
  }
}

export default ClientsContainer;
