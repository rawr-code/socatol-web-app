import gql from 'graphql-tag';

export const NEW_WAREHOUSE_MUTATION = gql`
  mutation newWarehouse($input: WarehouseInput!) {
    newWarehouse(input: $input)
  }
`;

export const UPDATE_WAREHOUSE_MUTATION = gql`
  mutation updateWarehouse($input: WarehouseInput!) {
    updateWarehouse(input: $input)
  }
`;
