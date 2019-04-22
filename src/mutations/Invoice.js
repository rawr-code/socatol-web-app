import gql from 'graphql-tag';

export const NEW_INVOICE_MUTATION = gql`
  mutation newInvoice($input: InvoiceInput!, $type: InvoiceTypes!) {
    newInvoice(input: $input, type: $type) {
      success
      error
      message
    }
  }
`;
