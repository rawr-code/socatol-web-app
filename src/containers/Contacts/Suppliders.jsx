import React, { Component } from 'react';

// Components
import DataTableHeader from '../../components/DataTableHeader';
import DataTable from '../../components/DataTable';

class SupplidersContainer extends Component {
  render() {
    return (
      <div>
        <DataTableHeader
          img="https://img.icons8.com/dusk/64/000000/supplier.png"
          title="Proveedores"
          subtitle="Lista de proveedores"
          buttonLabel="Agregar Proveedor"
        />
        <DataTable />
      </div>
    );
  }
}

export default SupplidersContainer;
