import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation userToken($input: UserTokenInput!) {
    userToken(input: $input) {
      token
    }
  }
`;
