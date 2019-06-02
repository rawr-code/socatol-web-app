import gql from 'graphql-tag';

export const PURCHASE_ADDED_SUBSCRIPTION = gql`
  subscription {
    purchaseAdded {
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

export const SALE_ADDED_SUBSCRIPTION = gql`
  subscription {
    saleAdded {
      id
      number
      dateEmit
      paymentType
      person
      status
      amount
    }
  }
`;
