var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { gql } from 'apollo-server-express';
import resolvers from '../resolvers/index';
const typeDefs = gql `

  type Query {
    users: [User!]! 
    user(userId: ID!): User!
    posts:[Post!]!
    somePosts(after: String,first: Int):PostConnection
    post(postId:ID!):Post!
    notices:[Notice!]!
    notice(_id:ID!):Notice!
  }
  type Mutation {
    login(email: String!, password: String!): AuthData!
    createUser(userInput: UserInput): AuthData!
    updateUser(userId: ID!, updateUser: UpdateUser): User!
    createPost(postInput: PostInput): Post!
    deletePost(_id: ID!):Post
    updatePost(postId:ID!,postUpdate:PostUpdate):Post!
    createNotice(body:String!):Notice!
    updateNotice(_id:ID!,noticeInput:UpdateNotice!):Notice!
    deleteNotice(_id:ID!):Notice
  }
  type Subscription {
    userAdded: User
    postAdded: Post
    }

  type User {
    _id: ID!
    email: String!
    username: String
    password: String
    # createdAt: String
    # updatedAt: String
  }
 type Notice{
   _id:ID!
   body:String!
   createdAt: String
 }
  
  type Post{
  _id:ID!
  username:String!
  description:String!
  createdAt: String
  updatedAt: String
  file:String
  postTitle:String!
}

type PostConnection{
  totalCount:Int
  pageInfo:PageInfo!
  edges:[PostEdge]!
}

type PostEdge{
  cursor:String!
  node:Post!
}
type PageInfo{
  endCursor:String
  hasNextPage:Boolean!
}


  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  # type File {
  #   filename:String!
  #   mimetype:String!
  #   encoding:String!
  # }

  input UserInput {
    email: String!
    username: String!
    password: String!
  }

  input UpdateUser {
    email: String
    username: String
    password: String
  }

  input PostInput{
  username:String!
  description:String!
  file:Upload
  postTitle:String!
 }

 input PostUpdate {
    description: String
    username: String
    file:Upload
    postTitle:String
  
  }
  input UpdateNotice {
   body:String
   updatedAt: String
  }

`;
const schema = {
    typeDefs,
    resolvers,
    introspection: true,
    context: ({ req, connection, payload }) => __awaiter(void 0, void 0, void 0, function* () {
        if (connection) {
            return { isAuth: payload.authToken };
        }
        return { isAuth: req.isAuth };
    }),
    playground: {
        settings: {
            'request.credentials': 'include',
        },
    }
};
export default schema;
