import React, { Component } from 'react';

// Components
import CardContainer from '../../components/CardContainer';
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class SupplidersContainer extends Component {
  render() {
    return (
      <CardContainer>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/supplier.png"
          title="Proveedores"
          subtitle="Lista de proveedores"
          buttonLabel="Agregar Proveedor"
          button
        />
        <DataTable />
      </CardContainer>
    );
  }
}

export default SupplidersContainer;
