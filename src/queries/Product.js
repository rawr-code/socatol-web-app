import gql from 'graphql-tag';

export const GET_PRODUCTS_QUERY = gql`
  query products {
    products {
      id
      name
      stock
      price
      iva
    }
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      name
      price
      iva
      stock
      clients {
        id
        dni
        name
        phone
        state
        municipality
        address
      }
      suppliders {
        id
        dni
        name
        phone
        state
        municipality
        address
      }
      warehouse {
        id
        name
      }
    }
  }
`;
