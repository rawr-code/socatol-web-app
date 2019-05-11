import gql from 'graphql-tag';

export const UPLOADFILE_MUTATION = gql`
  mutation singleUpload($input: FileInput!) {
    singleUpload(input: $input) {
      filename
      mimetype
      encoding
    }
  }
`;
