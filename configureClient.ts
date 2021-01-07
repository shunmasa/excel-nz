// import { ApolloClient } from 'apollo-client';
import { ApolloClient } from 'apollo-boost';

import { split, ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import withApollo from 'next-with-apollo';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { WebSocketLink } from 'apollo-link-ws';
import Cookies from './node_modules/js-cookie';
import { SERVER, WEB_SOCKET_LINK } from './src/config';

interface Definintion {
  kind: string;
  operation?: string;
}

let authToken = null;

const httpLink = new HttpLink({
  fetch,
  uri: SERVER
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || ''
    }
  });
  // Add onto payload for WebSocket authentication
  (operation as any & { authToken: string | undefined }).authToken = authToken;

  return forward(operation);
});

const webSocketLink: any = process.browser
  ? new WebSocketLink({
      uri: WEB_SOCKET_LINK,
      lazy: true,
      options: {
        reconnect: true,
        timeout: 30000
      }
    })
  : null;

/**
 * Set Token
 * @param token
 */
export const setToken = async (token: string) => {
  try {
    authToken = token ? `Bearer ${token}` : null;
    Cookies.set('', authToken, { expires: 7 });
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

/**
 * Set Token In Request
 * @param token
 */
export const setTokenInRequest = async (token: string) => {
  try {
    authToken = token ? token : null;
    return authToken;
  } catch(error){
     // tslint:disable-next-line:no-console
     console.log(error);
  }
};

/**
 * Destroy Token
 * For logout purpose
 */
export const destroyToken = async () => {
  try {
    Cookies.remove('token');
    authToken = null;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

const link = process.browser
  ? split(
      ({ query }) => {
        const { kind, operation }: Definintion = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocketLink,
      httpLink
    )
  : httpLink;

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: concat(authMiddleware, link),
      cache: new InMemoryCache().restore(initialState || {})
    })
);