import gql from 'graphql-tag';

export const NEW_BANKACCOUNT_MUTATION = gql`
  mutation addBankAccount($input: BankAccountInput!) {
    addBankAccount(input: $input)
  }
`;

export const UPDATE_BANKACCOUNT_MUTATION = gql`
  mutation updateBankAccount($input: BankAccountInput!) {
    updateBankAccount(input: $input)
  }
`;

export const NEW_BANKACCOUNT_TRANSACTION_MUTATION = gql`
  mutation newBankAccountTransaction($input: BankAccountTransactionInput!) {
    newBankAccountTransaction(input: $input)
  }
`;
