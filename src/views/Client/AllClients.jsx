import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../components/Layout';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

// Queries
import { GET_CLIENTS_QUERY } from '../../queries/Person';

const AllClients = () => {
  const columns = [
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'state',
      title: 'Estado'
    },
    {
      name: 'municipality',
      title: 'Municipio'
    },
    {
      name: 'phone',
      title: 'Telefono'
    },
    {
      name: 'address',
      title: 'Dirección'
    }
  ];

  return (
    <MainContainer>
      <ContentHeader title="Lista de clientes" />
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
            isLoading = false;
            rows = data.getPersonalInformations;
          }

          console.log(data);
          return (
            <DataTable
              columns={columns}
              rows={rows}
              isLoading={isLoading}
              // path="/inventario/productos"
              // history={props.history}
            />
          );
        }}
      </Query>
    </MainContainer>
  );
};

export default AllClients;
