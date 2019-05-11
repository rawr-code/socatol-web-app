import gql from 'graphql-tag';

export const GET_PRODUCTS_QUERY = gql`
  {
    getProducts {
      id
      name
      stock
      price
      iva
    }
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      iva
      stock
      warehouse {
        id
        name
      }
    }
  }
`;
