import gql from 'graphql-tag';

export const GET_WAREHOUSES_QUERY = gql`
  query warehouses {
    warehouses {
      id
      name
      description
    }
  }
`;

export const GET_WAREHOUSES1_QUERY = gql`
  query warehouses {
    warehouses {
      id
      name
      description
      products {
        name
      }
    }
  }
`;

export const GET_WAREHOUSE_QUERY = gql`
  query warehouse($id: ID!) {
    warehouse(id: $id) {
      id
      name
      description
      products {
        id
        name
        stock
        price
        iva
      }
    }
  }
`;
