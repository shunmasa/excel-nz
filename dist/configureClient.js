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
import { split, ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import withApollo from 'next-with-apollo';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { WebSocketLink } from 'apollo-link-ws';
import Cookies from './node_modules/js-cookie';
import { SERVER, WEB_SOCKET_LINK } from './src/config';
let authToken = null;
const httpLink = new HttpLink({
    fetch,
    uri: SERVER
});
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
const link = process.browser
    ? split(({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    }, webSocketLink, httpLink)
    : httpLink;
export default withApollo(({ initialState }) => new ApolloClient({
    link: concat(authMiddleware, link),
    cache: new InMemoryCache().restore(initialState || {})
}));
