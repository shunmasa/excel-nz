"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
// import cors from 'cors';
// import bodyParser from 'body-parser';
const express_1 = tslib_1.__importDefault(require("express"));
const https = tslib_1.__importStar(require("https"));
const index_1 = tslib_1.__importDefault(require("../graphql/schema/index"));
const auth_1 = tslib_1.__importDefault(require("../middleware/auth"));
// const origin = process.env.GRAPHQL_URI || 'http://localhost:4020' || 'https://excelnz.herokuapp.com/'|| 'https://studio.apollographql.com'
// const origin = 'https://excel-nz.herokuapp.com';  
// const methods = 'POST';
//   const corsOption = { origin, methods, credentials: true };
class Express {
    constructor() {
        // public server: ApolloServer = new ApolloServer(schema);
        this.server = new apollo_server_express_1.ApolloServer(index_1.default);
        this.init = () => {
            this.express = express_1.default();
            // this.express.use(cors(corsOption));
            this.express.use(auth_1.default);
            // this.server.applyMiddleware({ app: this.express });
            this.httpServer = https.createServer(this.express);
            /**
             * Installing subscription handlers
             */
            // this.server.installSubscriptionHandlers(this.httpServer);
        };
    }
}
exports.default = Express;
//# sourceMappingURL=express.js.map