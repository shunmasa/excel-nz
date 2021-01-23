
import { ApolloServer } from 'apollo-server-express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
import express from 'express';
import * as http from 'http';
import * as https from 'https';
import schema from '../graphql/schema/index';
import auth from '../middleware/auth';


// const origin = process.env.GRAPHQL_URI || 'http://localhost:4020' || 'https://excelnz.herokuapp.com/'|| 'https://studio.apollographql.com'
// const origin = 'https://excel-nz.herokuapp.com';  
// const methods = 'POST';
//   const corsOption = { origin, methods, credentials: true };

class Express {
  public express: express.Application;
  // public server: ApolloServer = new ApolloServer(schema);
  public server: ApolloServer =  new ApolloServer(schema)
  public httpServer: http.Server;
  public init = (): void => {
  
    this.express = express();
    // this.express.use(cors(corsOption));
    this.express.use(auth);  
    // this.server.applyMiddleware({ app: this.express });
    this.httpServer = https.createServer(this.express);
    /**
     * Installing subscription handlers
     */
    // this.server.installSubscriptionHandlers(this.httpServer);
  }
}

export default Express;