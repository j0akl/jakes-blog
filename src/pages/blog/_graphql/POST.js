import { gql } from "apollo-boost";

export const POST = gql`
  query Post($id: Int!) {
    post(id: $id) {
      id
      text
      title
      userId
      createdAt
      user {
        id
        username
      }
    }
  }
`;
