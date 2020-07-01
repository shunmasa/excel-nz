import gql from 'graphql-tag';
const GET_SOMEPOSTS = gql`

  query somePosts($cursor: String) {
    somePosts(first: 10, after: $cursor) {
      edges{
      node{
        _id
        file
        username
        createdAt
        description
        updatedAt
        postTitle
      }
      cursor
    }
    pageInfo{
      endCursor
      hasNextPage
    }
    totalCount
  }
  }
`;

export default GET_SOMEPOSTS;