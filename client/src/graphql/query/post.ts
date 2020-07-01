import gql from 'graphql-tag';

const GET_POST = gql`
  query getPost($postId:ID){
      _id
      username
      description
      file
      postTitle
  }
`;

export default GET_POST;
