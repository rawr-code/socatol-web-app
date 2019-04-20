import gql from 'graphql-tag';

export const GET_WAREHOUSES_QUERY = gql`
  {
    getWarehouses {
      id
      name
      description
      active
    }
  }
`;

export const GET_WAREHOUSE_QUERY = gql`
  query getWarehouse($id: ID!) {
    getWarehouse(id: $id) {
      id
      name
      description
      active
    }
  }
`;
