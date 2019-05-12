import gql from 'graphql-tag';

export const WAREHOUSE_ADDED_SUBSCRIPTION = gql`
  subscription {
    warehouseAdded {
      id
      name
      description
    }
  }
`;
