import gql from 'graphql-tag';

export const GET_PERSON_QUERY = gql`
  query person($id: ID!) {
    person(id: $id) {
      id
      dni
      name
      phone
      state
      municipality
      address
    }
  }
`;

export const GET_SUPPLIER_QUERY = gql`
  query person($id: ID!) {
    person(id: $id) {
      id
      dni
      name
      phone
      state
      municipality
      address
      invoices {
        purchase {
          dateEmit
          number
          paymentType
          amount
        }
      }
    }
  }
`;

export const GET_CLIENT_QUERY = gql`
  query person($id: ID!) {
    person(id: $id) {
      id
      dni
      name
      phone
      state
      municipality
      address
      invoices {
        sale {
          dateEmit
          number
          paymentType
          amount
        }
      }
    }
  }
`;

export const GET_PERSONS_QUERY = gql`
  query persons {
    persons {
      id
      name
      phone
      state
      municipality
    }
  }
`;

export const GET_CLIENTS_QUERY = gql`
  query persons {
    persons(type: CLIENT) {
      id
      dni
      name
      phone
      state
      municipality
      address
    }
  }
`;

export const GET_SUPPLIDERS_QUERY = gql`
  query persons {
    persons(type: SUPPLIER) {
      id
      dni
      name
      phone
      state
      municipality
      address
    }
  }
`;
