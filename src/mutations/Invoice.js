import gql from 'graphql-tag';

export const NEW_INVOICE_MUTATION = gql`
  mutation addInvoice($input: InvoiceInput!, $type: InvoiceTypes!) {
    addInvoice(input: $input, type: $type)
  }
`;
