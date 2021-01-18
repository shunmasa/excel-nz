var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import { setTokenInRequest } from '../utils/apolloClient';
const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';
export const auth = (ctx) => {
    const { token, userId } = nextCookie(ctx);
    console.log('logs:', ctx);
    if (ctx.req && !token) {
        { /* @ts-ignore */ }
        ctx.res.writeHead(307, { Location: '/' });
        { /* @ts-ignore */ }
        ctx.res.end();
        return;
    }
    if (!token) {
        Router.push('/');
    }
    return { token, userId };
};
export const withAuthSync = WrappedComponent => { var _a; return _a = class extends React.Component {
        static getInitialProps(ctx) {
            return __awaiter(this, void 0, void 0, function* () {
                const { token, userId } = auth(ctx);
                yield setTokenInRequest(token);
                const componentProps = WrappedComponent.getInitialProps &&
                    (yield WrappedComponent.getInitialProps(ctx));
                return Object.assign(Object.assign({}, componentProps), { token, userId });
            });
        }
        render() {
            return <WrappedComponent {...this.props}/>;
        }
    },
    _a.displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`,
    _a; };
