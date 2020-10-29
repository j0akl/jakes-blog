import { gql } from "apollo-boost";

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        id
        userId
        text
        title
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
