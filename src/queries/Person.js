import gql from 'graphql-tag';

export const GET_PERSONS_QUERY = gql`
  {
    getPersonalInformations {
      id
      firstname
      lastname
    }
  }
`;
