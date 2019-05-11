import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../Layout';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

// Queries
import { GET_SUPPLIDERS_QUERY } from '../../queries/Person';

const AllSuppliders = () => {
  const columns = [
    {
      name: 'dni',
      title: 'Cedula'
    },
    {
      name: 'name',
      title: 'Nombre'
    },
    {
      name: 'phone',
      title: 'Telefono'
    },
    {
      name: 'state',
      title: 'Estado'
    },
    {
      name: 'municipality',
      title: 'Municipio'
    }
  ];
  return (
    <MainContainer>
      <ContentHeader title="Lista de proveedores" />
      <Query query={GET_SUPPLIDERS_QUERY}>
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

export default AllSuppliders;
