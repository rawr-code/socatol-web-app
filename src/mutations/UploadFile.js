import gql from 'graphql-tag';

export const UPLOADFILE_MUTATION = gql`
  mutation uploadTransactions($input: FileInput!) {
    uploadTransactions(input: $input)
  }
`;
