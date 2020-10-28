import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      user {
        username
        id
        email
        createdAt
        updatedAt
      }
      errors {
        field
        message
      }
    }
  }
`;
