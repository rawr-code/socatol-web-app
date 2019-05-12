import gql from 'graphql-tag';

export const BANKACCOUNT_ADDED_SUBSCRIPTION = gql`
  subscription {
    bankAccountAdded {
      id
      name
      bank
      type
      number
    }
  }
`;
