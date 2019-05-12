import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../../Layout';

// Molecules
import DataTable from '../../../components/Molecules/DataTable';
import ContentHeader from '../../../components/Molecules/ContentHeader';

// Queries
import { GET_SALES_INVOICES_QUERY } from '../../../queries/Invoice';

const SalesInvoice = () => {
  const columns = [
    {
      name: 'dateEmit',
      title: 'Fecha'
    },
    {
      name: 'person',
      title: 'Cliente'
    },
    {
      name: 'number',
      title: 'Número'
    },
    {
      name: 'paymentType',
      title: 'Tipo de pago'
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
      <Query query={GET_SALES_INVOICES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) console.error(error);

          let { invoices } = data;

          console.log(data);
          return <DataTable columns={columns} rows={invoices} />;
        }}
      </Query>
    </MainContainer>
  );
};

export default SalesInvoice;
