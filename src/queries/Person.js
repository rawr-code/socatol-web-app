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

export const GET_PERSONS_QUERY = gql`
  query persons {
    persons {
      id
      name
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
