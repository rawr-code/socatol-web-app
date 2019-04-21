import gql from 'graphql-tag';

export const NEW_BANKACCOUNT_MUTATION = gql`
  mutation newBankAccount($input: BankAccountInput!) {
    newBankAccount(input: $input) {
      success
      error
      message
    }
  }
`;

export const UPDATE_BANKACCOUNT_MUTATION = gql`
  mutation updateBankAccount($input: BankAccountInput!) {
    updateBankAccount(input: $input) {
      success
      error
      message
    }
  }
`;
