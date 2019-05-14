import gql from 'graphql-tag';

export const UPDATE_PRODUCT_IVA_MUTATION = gql`
  mutation updateProductIVA($input: ConfigurationProductIVA!) {
    updateProductIVA(input: $input)
  }
`;

export const UPDATE_INVOICE_SALE_NUMBER_MUTATION = gql`
  mutation updateSaleInvoiceNumber($input: ConfigurationInvoiceNumber!) {
    updateSaleInvoiceNumber(input: $input)
  }
`;

export const UPDATE_INVOICE_PURCHASE_NUMBER_MUTATION = gql`
  mutation updatePurchaseInvoiceNumber($input: ConfigurationInvoiceNumber!) {
    updatePurchaseInvoiceNumber(input: $input)
  }
`;
