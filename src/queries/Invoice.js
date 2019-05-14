import gql from 'graphql-tag';

export const GET_SALES_INVOICES_QUERY = gql`
  query invoices {
    invoices(type: VENTA) {
      id
      number
      dateEmit
      paymentType
      person
      amount
      status
    }
  }
`;

export const GET_PURCHASES_INVOICES_QUERY = gql`
  query invoices {
    invoices(type: COMPRA) {
      id
      number
      dateEmit
      paymentType
      person
      amount
      status
    }
  }
`;
