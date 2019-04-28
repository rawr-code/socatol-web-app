import React from 'react';
import { Query } from 'react-apollo';

// Layout
import { FeatureBar } from '../../components/Layout';

// Queries
import { GET_WAREHOUSE_QUERY } from '../../queries/Warehouse';

const DetailsWarehouse = props => {
  const { id } = props.match.params;
  return (
    <Query query={GET_WAREHOUSE_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';

        if (error) return `Error: ${error.message}`;

        const warehouse = data.getWarehouse;
        console.log(warehouse);

        return (
          <>
            <FeatureBar title={warehouse.name} back />
            <p>Descripción: {warehouse.description}</p>
            <p>Activo: {`${warehouse.active}`}</p>
          </>
        );
      }}
    </Query>
  );
};

export default DetailsWarehouse;
