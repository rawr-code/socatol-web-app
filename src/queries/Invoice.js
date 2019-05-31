import gql from 'graphql-tag';

export const GET_INVOICE_QUERY = gql`
  query invoice($id: ID!) {
    invoice(id: $id) {
      number
      dateEmit
      type
      paymentType
      status
      note
      amount
      person {
        name
        phone
        state
        municipality
        address
      }
      products {
        name
        price
        quantity
      }
      transactions {
        date
        ref
        concept
        amount
        status
      }
    }
  }
`;

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
