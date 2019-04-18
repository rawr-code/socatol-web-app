import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_WAREHOUSES_QUERY } from '../../queries/Warehouse';

const AllWarehouses = props => {
  return (
    <div>
      <Query query={GET_WAREHOUSES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error:${error.message}`;

          console.log(data);
          return <h2>Data loaded!</h2>;
        }}
      </Query>
      <p>Warehouses</p>
    </div>
  );
};

export default AllWarehouses;
