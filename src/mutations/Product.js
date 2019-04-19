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
