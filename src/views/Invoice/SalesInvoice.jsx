import React from 'react';

// Layout
import { MainContainer } from '../../components/Layout';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

const SalesInvoice = () => {
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
      <ContentHeader
        title="Lista de facturas de venta"
        button={{
          label: 'Facturar venta',
          to: '/ingresos/facturas/venta/nuevo'
        }}
      />
      <DataTable columns={columns} rows={[]} />
    </MainContainer>
  );
};

export default SalesInvoice;
