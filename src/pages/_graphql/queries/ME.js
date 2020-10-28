import { gql } from "apollo-boost";
export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
      updatedAt
      createdAt
    }
  }
`;
