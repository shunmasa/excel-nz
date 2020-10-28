import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import * as http from 'http';
import schema from '../graphql/schema/index';
import auth from '../middleware/auth';
import config from './index';
import fs from 'fs';
const configurations = {
    // Note: You may need sudo to run on port 443
    production: { ssl: true, port: 443, hostname: 'example.com' },
    development: { ssl: false, port: 4000, hostname: 'localhost' }
};
const environment = process.env.NODE_ENV || 'production';
const configs = configurations[environment];
class Express {
    constructor() {
        this.server = new ApolloServer(schema);
        this.init = () => {
            /**
             * Creating an express application
             */
            this.express = express();
            /**
             * Middlerware for using CORS
             */
            this.express.use(cors({
                origin(origin, callback) {
                    /**
                     * Allow requests with no origin
                     * Like mobile apps or curl requests
                     */
                    if (!origin) {
                        return callback(null, true);
                    }
                    if (config.allowedOrigins.indexOf(origin) === -1) {
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
            this.express.use(auth);
            this.server.applyMiddleware({ app: this.express });
            if (configs.ssl) {
                this.httpServer = http.createServer({
                    /* @ts-ignore */
                    key: fs.readFileSync(`./ssl/${environment}/server.key`),
                    cert: fs.readFileSync(`./ssl/${environment}/server.crt`)
                }, this.express);
            }
            /**
             * Installing subscription handlers
             */
            this.server.installSubscriptionHandlers(this.httpServer);
        };
    }
}
export default Express;
