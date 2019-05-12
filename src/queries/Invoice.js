import gql from 'graphql-tag';

export const GET_SALES_INVOICES_QUERY = gql`
  query invoices {
    invoices(type: VENTA) {
      number
      dateEmit
      paymentType
      person
    }
  }
`;

export const GET_PURCHASES_INVOICES_QUERY = gql`
  query invoices {
    invoices(type: COMPRA) {
      number
      dateEmit
      paymentType
      person
    }
  }
`;
