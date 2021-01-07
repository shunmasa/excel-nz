import React, { useMemo } from "react"
import Head from "next/head"
import { ApolloProvider } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"

import fetch from 'isomorphic-unfetch'
import Cookies from '../node_modules/js-cookie';
import { split, ApolloLink, concat } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';

import { HttpLink } from 'apollo-link-http';
let apolloClient = null


/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent, { ssr = true } = {}) {
  const WithApollo = ({
    apolloClient,
    apolloState,
    ...pageProps
  }: {
    apolloClient: ApolloClient<{}>
    apolloState: any
    [key: string]: any
  }) => {
    const client = useMemo(
      () => apolloClient || initApolloClient(apolloState),
      []
    )
    // const client = apolloClient || initApolloClient(apolloState)
    return (
      <ApolloProvider client={client as any}>
        <PageComponent  />
      </ApolloProvider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== "development") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component"

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.")
    }

    WithApollo.displayName = `withApollo(${displayName})`
  }

  // Allow Next.js to remove getInitialProps from the browser build
  if (typeof window === "undefined") {
    if (ssr) {
      WithApollo.getInitialProps = async (ctx: { ctx?: any; AppTree?: any }) => {
        const { AppTree } = ctx
        // Run all GraphQL queries in the component tree
        // and extract the resulting data
        const apolloClient = initApolloClient()
        ctx.ctx.apolloClient = apolloClient

        let pageProps = {}
        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx)
        }

        try {
          // Run all GraphQL queries
          await require("@apollo/react-ssr").getDataFromTree(
            <AppTree
              pageProps={{
                ...pageProps,
                apolloClient,
              }}
            />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()

        // Extract query data from the Apollo store
        const apolloState = apolloClient.cache.extract()

        return {
          ...pageProps,
          apolloState,
        }
      }
    }
  }

  return WithApollo
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState = {}): ApolloClient<{}> {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return createApolloClient(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState)
  }

  return apolloClient
}


interface Definintion {
  kind: string;
  operation?: string;
}

let authToken = null;

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || null
    }
  });
  // Add onto payload for WebSocket authentication
  (operation as any & { authToken: string | undefined }).authToken = authToken;

  return forward(operation);
});

const webSocketLink: any = process.browser
  ? new WebSocketLink({
      uri:"wss://localhost:4020/graphql",
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
    Cookies.set('token', authToken, { expires: 7 });
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

const isBrowser = typeof window !== "undefined"

const httpLink = new HttpLink({
  uri:"https://excelnz.herokuapp.com/graphql", 
  credentials: "same-origin", 
  fetch: !isBrowser && fetch,
  fetchOptions: {
    mode: 'cors',
  }
}) 
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
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}): ApolloClient<{}> {

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: concat(authMiddleware, link),
    cache: new InMemoryCache().restore(initialState),
  })
}
