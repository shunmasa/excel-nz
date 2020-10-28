var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useMemo } from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import fetch from 'isomorphic-unfetch';
import Cookies from '../node_modules/js-cookie';
import { split, ApolloLink, concat } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
let apolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent, { ssr = true } = {}) {
    const WithApollo = (_a) => {
        var { apolloClient, apolloState } = _a, pageProps = __rest(_a, ["apolloClient", "apolloState"]);
        const client = useMemo(() => apolloClient || initApolloClient(apolloState), []);
        // const client = apolloClient || initApolloClient(apolloState)
        return (<ApolloProvider client={client}>
        <PageComponent />
      </ApolloProvider>);
    };
    // Set the correct displayName in development
    if (process.env.NODE_ENV !== "production") {
        const displayName = PageComponent.displayName || PageComponent.name || "Component";
        if (displayName === "App") {
            console.warn("This withApollo HOC only works with PageComponents.");
        }
        WithApollo.displayName = `withApollo(${displayName})`;
    }
    // Allow Next.js to remove getInitialProps from the browser build
    if (typeof window === "undefined") {
        if (ssr) {
            WithApollo.getInitialProps = (ctx) => __awaiter(this, void 0, void 0, function* () {
                const { AppTree } = ctx;
                // Run all GraphQL queries in the component tree
                // and extract the resulting data
                const apolloClient = initApolloClient();
                ctx.ctx.apolloClient = apolloClient;
                let pageProps = {};
                if (PageComponent.getInitialProps) {
                    pageProps = yield PageComponent.getInitialProps(ctx);
                }
                try {
                    // Run all GraphQL queries
                    yield require("@apollo/react-ssr").getDataFromTree(<AppTree pageProps={Object.assign(Object.assign({}, pageProps), { apolloClient })}/>);
                }
                catch (error) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                    console.error("Error while running `getDataFromTree`", error);
                }
                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind();
                // Extract query data from the Apollo store
                const apolloState = apolloClient.cache.extract();
                return Object.assign(Object.assign({}, pageProps), { apolloState });
            });
        }
    }
    return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState = {}) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === "undefined") {
        return createApolloClient(initialState);
    }
    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = createApolloClient(initialState);
    }
    return apolloClient;
}
let authToken = null;
const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            authorization: authToken || null
        }
    });
    // Add onto payload for WebSocket authentication
    operation.authToken = authToken;
    return forward(operation);
});
const webSocketLink = process.browser
    ? new WebSocketLink({
        uri: "ws://localhost:4020/graphql",
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
export const setToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        authToken = token ? `Bearer ${token}` : null;
        Cookies.set('token', authToken, { expires: 7 });
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
});
/**
 * Set Token In Request
 * @param token
 */
export const setTokenInRequest = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        authToken = token ? token : null;
        return authToken;
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
});
/**
 * Destroy Token
 * For logout purpose
 */
export const destroyToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Cookies.remove('token');
        authToken = null;
    }
    catch (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    }
});
const isBrowser = typeof window !== "undefined";
const httpLink = new HttpLink({
    uri: "http://localhost:8080/graphql",
    credentials: "same-origin",
    fetch: !isBrowser && fetch,
    fetchOptions: {
        mode: 'cors',
    }
});
const link = process.browser
    ? split(({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    }, webSocketLink, httpLink)
    : httpLink;
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}) {
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser,
        link: concat(authMiddleware, link),
        cache: new InMemoryCache().restore(initialState),
    });
}
