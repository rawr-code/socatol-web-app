import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_SUPPLIER_QUERY } from '../../queries/Supplier';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import DataTableHeader from '../../components/Molecules/DataTableHeader';

const AllSuppliders = props => {
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
    <Query query={GET_SUPPLIER_QUERY}>
      {({ loading, error, data }) => {
        let isLoading = false;
        let rows = [];

        if (loading) isLoading = true;

        if (error) {
          isLoading = false;
          return `Error: ${error.message}`;
        }

        if (Object.keys(data).length > 0) {
          console.log(data);
          rows = data.getClients;
        }

        return (
          <>
            <DataTableHeader title="Lista de proveedores" />
            <DataTable columns={columns} rows={rows} isLoading={isLoading} />
          </>
        );
      }}
    </Query>
  );
};

export default AllSuppliders;
