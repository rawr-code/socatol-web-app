import gql from 'graphql-tag';

export const GET_BANKACCOUNTS_QUERY = gql`
  query bankAccounts {
    bankAccounts {
      id
      name
      bank
      type
      number
    }
  }
`;

export const GET_BANKACCOUNT_QUERY = gql`
  query bankAccount($id: ID!) {
    bankAccount(id: $id) {
      id
      name
      bank
      type
      number
    }
  }
`;

export const GET_BANKACCOUNT_TRANSACTIONS_QUERY = gql`
  query bankAccountTransactions($id: ID!, $limit: Int, $offset: Int) {
    bankAccountTransactions(id: $id, limit: $limit, offset: $offset) {
      id
      date
      ref
      concept
      amount
      balance
      status
    }
  }
`;
