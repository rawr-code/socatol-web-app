import React from 'react';
import { Query } from 'react-apollo';

// Queries
import { GET_WAREHOUSE_QUERY } from '../../queries/Warehouse';

// Mutations
import { UPDATE_WAREHOUSE_MUTATION } from '../../mutations/Warehouse';

import WarehouseForm from './WarehouseForm';

const UpdateWarehouse = props => {
  const { id } = props.match.params;
  return (
    <Query query={GET_WAREHOUSE_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return 'loading...';

        if (error) console.log(`Error: ${error.message}`);

        if (data && data.getWarehouse === null) return 'not found 404';

        return (
          <WarehouseForm
            mutation={UPDATE_WAREHOUSE_MUTATION}
            data={data.getWarehouse}
          />
        );
      }}
    </Query>
  );
};

export default UpdateWarehouse;
