import gql from 'graphql-tag';

export const PRODUCT_ADDED_SUBSCRIPTION = gql`
  subscription {
    productAdded {
      id
      name
      stock
      price
      iva
    }
  }
`;
