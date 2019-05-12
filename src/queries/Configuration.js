import gql from 'graphql-tag';

export const GET_CONFIGURATION_QUERY = gql`
  query configuration {
    configuration {
      iva {
        product
      }
      invoice {
        sale {
          number
        }
        purchase {
          number
        }
      }
    }
  }
`;
