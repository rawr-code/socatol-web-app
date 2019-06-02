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
      warehouse {
        id
        name
      }
    }
  }
`;

export const GET_PRODUCT_OTHER_QUERY = gql`
  query productsOther($id: ID!) {
    productsOther(id: $id) {
      id
      name
      price
      iva
      stock
      clients {
        person {
          id
          dni
          name
          phone
          state
          municipality
          address
        }
        quantitys {
          date
          invoice {
            id
          }
          quantity
        }
      }
      suppliders {
        person {
          id
          dni
          name
          phone
          state
          municipality
          address
        }
        prices {
          invoice {
            number
          }
          date
          amount
          quantity
        }
      }
      warehouse {
        id
        name
      }
    }
  }
`;
