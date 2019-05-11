import gql from 'graphql-tag';

export const GET_PERSONS_QUERY = gql`
  {
    getPersonalInformations {
      id
      name
    }
  }
`;

export const GET_CLIENTS_QUERY = gql`
  {
    getPersonalInformations(type: CLIENT) {
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
  {
    getPersonalInformations(type: SUPPLIER) {
      dni
      name
      phone
      state
      municipality
      address
    }
  }
`;
