import gql from 'graphql-tag';

export const NEW_WAREHOUSE_MUTATION = gql`
  mutation newWarehouse($input: WarehouseInput!) {
    newWarehouse(input: $input) {
      success
      error
      message
    }
  }
`;

export const UPDATE_WAREHOUSE_MUTATION = gql`
  mutation updateWarehouse($input: WarehouseInput!) {
    updateWarehouse(input: $input) {
      success
      error
      message
    }
  }
`;
