import gql from 'graphql-tag';

export const NEW_BANKACCOUNT_MUTATION = gql`
  mutation newBankAccount($input: BankAccountInput!) {
    newBankAccount(input: $input)
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
