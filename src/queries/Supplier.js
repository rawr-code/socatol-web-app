import gql from 'graphql-tag';

export const GET_SUPPLIER_QUERY = gql`
  {
    getClients {
      dni
      firstname
      lastname
      address
    }
  }
`;
