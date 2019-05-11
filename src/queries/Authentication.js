import gql from 'graphql-tag';

export const AUTH_USER_QUERY = gql`
  query authUser($token: String!) {
    authUser(token: $token) {
      username
      role
    }
  }
`;
