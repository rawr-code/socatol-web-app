import gql from 'graphql-tag';

export const UPDATE_PRODUCT_IVA_MUTATION = gql`
  mutation updateConfigurationProductIVA($input: ConfigurationProductIVA!) {
    updateConfigurationProductIVA(input: $input)
  }
`;

export const UPDATE_INVOICE_SALE_NUMBER_MUTATION = gql`
  mutation updateConfigurationSaleInvoiceNumber(
    $input: ConfigurationSaleInvoiceNumber!
  ) {
    updateConfigurationSaleInvoiceNumber(input: $input)
  }
`;

export const UPDATE_INVOICE_PURCHASE_NUMBER_MUTATION = gql`
  mutation updateConfigurationPurchaseInvoiceNumber(
    $input: ConfigurationPurchaseInvoiceNumber!
  ) {
    updateConfigurationPurchaseInvoiceNumber(input: $input)
  }
`;
