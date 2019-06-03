import gql from 'graphql-tag';

export const NEW_PRODUCT_MUTATION = gql`
  mutation addProduct($input: ProductInput!) {
    addProduct(input: $input)
  }
`;

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation updateProduct($input: ProductInput!) {
    updateProduct(input: $input)
  }
`;
