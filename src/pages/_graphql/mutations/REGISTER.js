import { gql } from "apollo-boost";

export const REGISTER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      user {
        id
        username
        createdAt
        updatedAt
        email
      }
      errors {
        field
        message
      }
    }
  }
`;
