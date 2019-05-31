import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer, FeatureBar } from '../Layout';

// Molecules
import { ContentHeader, DataTable } from '../components/Molecules';

// Queries
import { GET_PERSONS_QUERY } from '../queries/Person';

const AllProducts = () => {
  return (
    <>
      <FeatureBar title="Contactos" />
      <MainContainer>
        <ContentHeader title="Lista de contactos" />
        <Query query={GET_PERSONS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) console.error(error.message);

            const { persons } = data;

            console.log(data);
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
              }
            ];
            return <DataTable columns={columns} rows={persons} />;
          }}
        </Query>
      </MainContainer>
    </>
  );
};

export default AllProducts;
