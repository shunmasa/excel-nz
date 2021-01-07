"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import { ApolloServer }from 'apollo-server-express';
const { GraphqlHTTP } = require('express-graphql');
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const http = tslib_1.__importStar(require("http"));
const index_1 = tslib_1.__importDefault(require("../graphql/schema/index"));
const auth_1 = tslib_1.__importDefault(require("../middleware/auth"));
const index_2 = tslib_1.__importDefault(require("./index"));
class Express {
    constructor() {
        this.graphqlHTTP = new GraphqlHTTP({ schema: index_1.default, graphiql: true });
        this.init = () => {
            /**
             * Creating an express application
             */
            this.express = express_1.default();
            /**
             * Middlerware for using CORS
             cors(graphql/)??*/
            this.express.use(cors_1.default({
                origin(origin, callback) {
                    /**
                     * Allow requests with no origin
                     * Like mobile apps or curl requests
                     */
                    if (!origin) {
                        return callback(null, true);
                    }
                    if (index_2.default.allowedOrigins.indexOf(origin) === -1) {
                        const msg = `The CORS policy for this site does not
          allow access from the specified Origin.`;
                        return callback(new Error(msg), false);
                    }
                    return callback(null, true);
                }
            }));
            /**
             *  Middlerware for extracting authToken
             */
            this.express.use(auth_1.default);
            this.graphqlHTTP.applyMiddleware('/graphql', { app: this.express });
            this.httpServer = http.createServer(this.express);
            /**
             * Installing subscription handlers
             */
            this.graphqlHTTP.installSubscriptionHandlers('/graphql', this.httpServer);
        };
    }
}
exports.default = Express;
//# sourceMappingURL=express.js.map