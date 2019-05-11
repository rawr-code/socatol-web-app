import gql from 'graphql-tag';

export const GET_CONFIGURATION_QUERY = gql`
  {
    getConfiguration {
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
