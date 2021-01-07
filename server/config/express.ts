
// import { ApolloServer }from 'apollo-server-express';
const {GraphqlHTTP  } = require('express-graphql');
import cors from 'cors';
import express from 'express';
import * as http from 'http';
import schema from '../graphql/schema/index';
import auth from '../middleware/auth';
import config from './index';

class Express {
  public express: express.Application;
 public graphqlHTTP  = new GraphqlHTTP ({schema, graphiql: true});
  public httpServer: http.Server;
  public init = (): void => {
    /**
     * Creating an express application
     */
    this.express = express();
    /**
     * Middlerware for using CORS
     cors(graphql/)??*/
    this.express.use(cors({
      origin(origin, callback) {
        /**
         * Allow requests with no origin
         * Like mobile apps or curl requests
         */
        if (!origin) { return callback(null, true); }
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

    this.graphqlHTTP.applyMiddleware( '/graphql',{ app: this.express });
    this.httpServer = http.createServer(this.express);
    /**
     * Installing subscription handlers
     */
    this.graphqlHTTP.installSubscriptionHandlers( '/graphql',this.httpServer);
  }
}

export default Express;