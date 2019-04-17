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
