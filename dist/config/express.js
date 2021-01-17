"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
// import cors from 'cors';
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const express_1 = tslib_1.__importDefault(require("express"));
const http = tslib_1.__importStar(require("http"));
const index_1 = tslib_1.__importDefault(require("../graphql/schema/index"));
const auth_1 = tslib_1.__importDefault(require("../middleware/auth"));
const next = require('next');
// import config from './index';
// const cors = require('cors')
// const allowedOrigins =  ['http://localhost:3000','https://excelnz.herokuapp.com/','http://localhost:4020']
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// const origin = process.env.GRAPHQL_URI || 'http://localhost:4020' || 'https://excelnz.herokuapp.com/'|| 'https://studio.apollographql.com'
const origin = '*';
const methods = 'POST';
const cors = { origin, methods, credentials: true };
class Express {
    constructor() {
        this.server = new apollo_server_express_1.ApolloServer(index_1.default);
        this.init = () => {
            this.express = express_1.default();
            // this.express.use(cors());
            app.prepare()
                .then(() => {
                this.express.all("*", handle);
            });
            this.express.use(auth_1.default);
            this.express.use(body_parser_1.default.json());
            // this.express.use(bodyParser.urlencoded({extended:true}))
            this.server.applyMiddleware({ cors, path: '/graphql', app: this.express });
            this.httpServer = http.createServer(this.express);
            /**
             * Installing subscription handlers
             */
            this.server.installSubscriptionHandlers(this.httpServer);
        };
    }
}
exports.default = Express;
//# sourceMappingURL=express.js.map