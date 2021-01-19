import withApollo from 'next-with-apollo';
import fetch from 'isomorphic-unfetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import cookie from 'cookie';
import get from 'lodash/get';
import { split, ApolloLink, concat } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
// const { createUploadLink } = require('apollo-upload-client');
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from '@apollo/react-hooks';

interface Definintion {
  kind: string;
  operation?: string;
}


const isBrowser = typeof window !== "undefined"
const getToken = headers => {
  const COOKIE_NAME = 'excel-token'
  const cookies = isBrowser ? get(headers, 'cookie', '') : document.cookie;

  return get(cookie.parse(cookies), COOKIE_NAME, '');
};

let authToken = null;

const attachAuth = headers => () => {
  const token = getToken(headers);

  return {
    headers: {
      authorization: `Bearer ${token}`
    }
  };
};

export const setToken = async (token: string) => {
  try {
    authToken = token ? `Bearer ${token}` : null;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

export const setTokenInRequest = async (token: string) => {
  try {
    authToken = token ? token : null;
    return authToken;
  } catch(error){
     // tslint:disable-next-line:no-console
     console.log(error);
  }
};


export default withApollo(
  ({ initialState ,headers = {}}) => {
    const authLink = () => setContext(attachAuth(headers));
  
    const httpLink = new HttpLink({
      credentials: 'include',
      uri: 'https://excelnz.herokuapp.com/',
      fetch
    });
    // const webSocketLink: any = process.browser
    // ? new WebSocketLink({
    //     uri:"ws://excelnz.herokuapp.com/graphql",
    //     options: {
    //       reconnect: true
    //     }
    //   })
    // : null;

  //   const link = process.browser
  // ? split(
  //     ({ query }) => {
  //       const { kind, operation }: Definintion = getMainDefinition(query);
  //       return kind === 'OperationDefinition' && operation === 'subscription';
  //     },
  //     webSocketLink,
  //     httpLink
  //   )
  // : httpLink;


    return new ApolloClient({
      ssrMode: isBrowser,
      link: ApolloLink.from([authLink(), httpLink]),
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
  );