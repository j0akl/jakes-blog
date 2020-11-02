import { gql } from "apollo-boost";

export const POSTS = gql`
  {
    posts {
      id
      title
      text
      createdAt
      user {
        id
        username
        createdAt
      }
    }
  }
`;
