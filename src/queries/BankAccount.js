import gql from 'graphql-tag';

export const GET_BANKACCOUNTS_QUERY = gql`
  {
    getBankAccounts {
      id
      name
      bank
      type
      number
      active
    }
  }
`;

export const GET_BANKACCOUNT_QUERY = gql`
  query getBankAccount($id: ID!) {
    getBankAccount(id: $id) {
      id
      name
      bank
      type
      number
      active
    }
  }
`;
