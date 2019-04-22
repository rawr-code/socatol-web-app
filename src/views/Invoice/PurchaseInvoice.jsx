import React from 'react';

// Layout
import { MainContainer } from '../../components/Layout';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

const PurchaseInvoice = () => {
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
        title="Lista de facturas de compra"
        button={{
          label: 'Facturar compra',
          to: '/gastos/facturar/compra/nuevo'
        }}
      />
      <DataTable columns={columns} rows={[]} />
    </MainContainer>
  );
};

export default PurchaseInvoice;
