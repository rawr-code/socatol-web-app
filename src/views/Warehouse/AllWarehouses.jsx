import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { MainContainer } from '../../components/Layout';

// Queries
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

const AllWarehouses = props => {
  return (
    <MainContainer>
      <Query query={GET_WAREHOUSES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error:${error.message}`;

          console.log(data);
          return <h2>Data loaded!</h2>;
        }}
      </Query>
      <p>Warehouses</p>
    </MainContainer>
  );
};

export default AllWarehouses;
