import gql from 'graphql-tag';

export const NEW_BANKACCOUNT_MUTATION = gql`
  mutation addBankAccount($input: BankAccountInput!) {
    addBankAccount(input: $input)
  }
`;

export const CONCILIATE_MUTATION = gql`
  mutation bankAccountTransactionConciliate(
    $input: bankAccountTransactionConciliateInput!
  ) {
    bankAccountTransactionConciliate(input: $input)
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
