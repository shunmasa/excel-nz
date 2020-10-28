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
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from '../src/utils/apolloClient';
// import { ServerStyleSheets } from '@material-ui/core/styles';
let globalApolloClient = null;
/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerSideProps
 * @param {NextPageContext | NextAppContext} ctx
 */
export const initOnContext = (ctx) => {
    const inAppContext = Boolean(ctx.ctx);
    if (process.env.NODE_ENV === 'development') {
        if (inAppContext) {
            console.warn('Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n' +
                'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n');
        }
    }
    const apolloClient = ctx.apolloClient ||
        initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);
    apolloClient.toJSON = () => null;
    ctx.apolloClient = apolloClient;
    if (inAppContext) {
        ctx.ctx.apolloClient = apolloClient;
    }
    return ctx;
};
/**
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */
const initApolloClient = (initialState, ctx) => {
    if (typeof window === 'undefined') {
        return createApolloClient(initialState, ctx);
    }
    // Reuse client on the client-side
    if (!globalApolloClient) {
        globalApolloClient = createApolloClient(initialState, ctx);
    }
    return globalApolloClient;
};
/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */
export const withApollo = ({ ssr = false } = {}) => (PageComponent) => {
    const WithApollo = (_a) => {
        var { apolloClient, apolloState } = _a, pageProps = __rest(_a, ["apolloClient", "apolloState"]);
        let client;
        if (apolloClient) {
            // Happens on: getDataFromTree & next.js ssr
            client = apolloClient;
        }
        else {
            // Happens on: next.js csr
            client = initApolloClient(apolloState, undefined);
        }
        return (<ApolloProvider client={client}>
        <PageComponent {...pageProps}/>
      </ApolloProvider>);
    };
    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName = PageComponent.displayName || PageComponent.name || 'Component';
        WithApollo.displayName = `withApollo(${displayName})`;
    }
    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
            const inAppContext = Boolean(ctx.ctx);
            const { apolloClient } = initOnContext(ctx);
            // Run wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = yield PageComponent.getInitialProps(ctx);
            }
            else if (inAppContext) {
                pageProps = yield App.getInitialProps(ctx);
            }
            // Only on the server:
            if (typeof window === 'undefined') {
                const { AppTree } = ctx;
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return pageProps;
                }
                // Only if dataFromTree is enabled
                if (ssr && AppTree) {
                    try {
                        // Import `@apollo/react-ssr` dynamically.
                        // We don't want to have this in our client bundle.
                        const { getDataFromTree, getMarkupFromTree } = yield import('@apollo/react-ssr');
                        let props;
                        if (inAppContext) {
                            props = Object.assign(Object.assign({}, pageProps), { apolloClient });
                        }
                        else {
                            props = { pageProps: Object.assign(Object.assign({}, pageProps), { apolloClient }) };
                        }
                        yield getMarkupFromTree({
                            tree: (<AppTree {...props}/>)
                        });
                        // await getDataFromTree(<AppTree {...props} />)
                    }
                    catch (error) {
                        console.error('Error while running `getDataFromTree`', error);
                    }
                    Head.rewind();
                }
            }
            return Object.assign(Object.assign({}, pageProps), { apolloState: apolloClient.cache.extract(), 
                // Provide the client for ssr. As soon as this payload
                // gets JSON.stringified it will remove itself.
                apolloClient: ctx.apolloClient });
        });
    }
    return WithApollo;
};
