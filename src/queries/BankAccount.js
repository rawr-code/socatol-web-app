import gql from 'graphql-tag';

export const GET_BANKACCOUNTS_QUERY = gql`
  {
    getBankAccounts {
      id
      name
      bank
      type
      number
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
    }
  }
`;

export const GET_BANKACCOUNT_TRANSACTIONS_QUERY = gql`
  query getBankAccountTransactions($id: ID!, $limit: Int, $offset: Int) {
    getBankAccountTransactions(id: $id, limit: $limit, offset: $offset) {
      date
      ref
      concept
      amount
    }
  }
`;
