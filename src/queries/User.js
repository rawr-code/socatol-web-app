import gql from 'graphql-tag';

export const GET_USERS_QUERY = gql`
  query users {
    users {
      username
      role
    }
  }
`;
