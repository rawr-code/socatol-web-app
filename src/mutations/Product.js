import gql from 'graphql-tag';

export const NEW_PRODUCT_MUTATION = gql`
  mutation newProduct($input: ProductInput!) {
    newProduct(input: $input) {
      success
      error
      message
    }
  }
`;

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation updateProduct($input: ProductInput!) {
    updateProduct(input: $input) {
      success
      error
      message
    }
  }
`;
