import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_CLIENTS_QUERY } from '../../queries/Client';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

const AllClients = props => {
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
    <Query query={GET_CLIENTS_QUERY}>
      {({ loading, error, data }) => {
        let isLoading = false;
        let rows = [];

        if (loading) isLoading = true;

        if (error) {
          isLoading = false;
          return `Error: ${error.message}`;
        }

        if (Object.keys(data).length > 0) {
          rows = data.getClients;
        }

        return (
          <>
            <ContentHeader title="Lista de clientes" />
            <DataTable columns={columns} rows={rows} isLoading={isLoading} />
          </>
        );
      }}
    </Query>
  );
};

export default AllClients;
