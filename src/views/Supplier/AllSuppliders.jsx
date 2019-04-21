import React from 'react';

// Layout
import { MainContainer } from '../../components/Layout';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

const AllSuppliders = () => {
  const columns = [
    {
      name: 'dni',
      title: 'Cedula'
    },
    {
      name: 'firstname',
      title: 'Nombre'
    },
    {
      name: 'lastname',
      title: 'Apellido'
    },
    {
      name: 'address',
      title: 'Dirección'
    }
  ];
  return (
    <MainContainer>
      <ContentHeader title="Lista de proveedores" />
      <DataTable columns={columns} rows={[]} />
    </MainContainer>
  );
};

export default AllSuppliders;
