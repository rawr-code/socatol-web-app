import gql from 'graphql-tag';

export const NEW_USER_MUTATION = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input)
  }
`;
