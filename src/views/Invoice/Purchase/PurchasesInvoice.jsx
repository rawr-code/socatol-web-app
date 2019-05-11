import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../../Layout';

// Molecules
import { DataTable, ContentHeader } from '../../../components/Molecules';

// Queries
import { GET_PURCHASES_INVOICES_QUERY } from '../../../queries/Invoice';

const SalesInvoice = () => {
  const columns = [
    {
      name: 'dateEmit',
      title: 'Fecha'
    },
    {
      name: 'person',
      title: 'Proveedor'
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
        title="Lista de facturas de compra"
        button={{
          label: 'Facturar Compra',
          to: '/gastos/facturas/compra/nuevo'
        }}
      />
      <Query query={GET_PURCHASES_INVOICES_QUERY}>
        {({ loading, error, data }) => {
          let isLoading = false;
          let rows = [];

          if (loading) isLoading = true;

          if (error) {
            isLoading = false;
            return `Error: ${error.message}`;
          }

          if (Object.keys(data).length > 0) {
            isLoading = false;
            rows = data.getInvoices;
          }

          console.log(data);
          return (
            <DataTable
              columns={columns}
              rows={rows}
              isLoading={isLoading}
              path="/inventario/productos"
              // history={props.history}
            />
          );
        }}
      </Query>
    </MainContainer>
  );
};

export default SalesInvoice;
