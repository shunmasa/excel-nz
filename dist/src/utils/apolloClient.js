var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Cookies from 'js-cookie';
import { split, ApolloLink, concat } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
const { createUploadLink } = require('apollo-upload-client');
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
const httpLink = createUploadLink({
    uri: "http://localhost:4020/graphql",
    credentials: "same-origin",
    fetch: !isBrowser && fetch,
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
export default function createApolloClient(initialState, ctx) {
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser,
        link: concat(authMiddleware, link),
        cache: new InMemoryCache().restore(initialState),
    });
}
