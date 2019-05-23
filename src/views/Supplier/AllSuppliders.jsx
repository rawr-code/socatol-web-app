import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
// Layout
import { MainContainer } from '../../Layout';

// Molecules
import DataTable from '../../components/Molecules/DataTable';
import ContentHeader from '../../components/Molecules/ContentHeader';

// Queries
import { GET_SUPPLIDERS_QUERY } from '../../queries/Person';

const AllSuppliders = ({ history }) => {
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
          if (loading) return null;
          if (error) console.error(error);

          let { persons } = data;

          console.log(data);
          return (
            <DataTable
              columns={columns}
              rows={persons}
              handleClick={({ id }) =>
                history.push(`/gastos/proveedores/${id}`)
              }
            />
          );
        }}
      </Query>
    </MainContainer>
  );
};

export default withRouter(AllSuppliders);
