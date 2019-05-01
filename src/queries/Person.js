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
      name
      phone
      state
      municipality
      address
    }
  }
`;
