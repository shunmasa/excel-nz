
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import * as http from 'http';
import schema from '../graphql/schema/index';
import auth from '../middleware/auth';
const next = require('next')
// import config from './index';
// const cors = require('cors')
// const allowedOrigins =  ['http://localhost:3000','https://excelnz.herokuapp.com/','http://localhost:4020']

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();


// const origin = process.env.GRAPHQL_URI || 'http://localhost:4020' || 'https://excelnz.herokuapp.com/'|| 'https://studio.apollographql.com'
const origin = 'https://excel-nz.herokuapp.com';  
const methods = 'POST';
  const corsOption = { origin, methods, credentials: true };

class Express {
  public express: express.Application;
  public server: ApolloServer = new ApolloServer(schema);
  public httpServer: http.Server;
  public init = (): void => {
   

    this.express = express();
 
  
    this.express.use(cors(corsOption));

app.prepare()
.then(() => { 
   this.express.get('*', (req, res) => handle(req, res));

    
})


    this.express.use(auth);
    this.express.use(bodyParser.json())
    // this.express.use(bodyParser.urlencoded({extended:true}))
    this.server.applyMiddleware({ cors: corsOption,app: this.express });
    this.httpServer = http.createServer(this.express);
    /**
     * Installing subscription handlers
     */
    this.server.installSubscriptionHandlers(this.httpServer);
  }
}

export default Express;