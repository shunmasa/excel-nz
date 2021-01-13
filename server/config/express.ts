
import { ApolloServer } from 'apollo-server-express';
// import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import * as http from 'http';
import schema from '../graphql/schema/index';
import auth from '../middleware/auth';
const next = require('next')
// import config from './index';
const cors = require('cors')
// const allowedOrigins =  ['http://localhost:3000','https://excelnz.herokuapp.com/','http://localhost:4020']

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();


class Express {
  public express: express.Application;
  public server: ApolloServer = new ApolloServer(schema);
  public httpServer: http.Server;
  public init = (): void => {
   

    this.express = express();
 
  
    this.express.use('*',cors());
    

app.prepare()
.then(() => { 
   this.express.all("*", handle);
  // this.express.get('/card/:studentDialog', (req, res) => {
  //   return app.render(req, res, '/card', { studentDialog: req.params.id })
  // })
  // this.express.get('/dashboard/:dashboard', (req, res) => {
  //   return app.render(req, res, '/dashboard', { dashboard: req.params.id })
  // })

  // this.express.get('*', (req, res) => {
  //   if (req.url === '/') {
  //     res.writeHead(200, {
  //       Connection: 'keep-alive',
  //       'Cache-Control': 'no-cache',
  //       'Content-Type': 'text/plain'
  //       // 'Content-Type': 'text/event-stream',
  //     });
  //     res.write('data: Processing...\n\n');
  //     setTimeout(() => {
  //       res.write('data: Processing2...\n\n');
  //     }, 10000);
  //   } else {
  //     return handle(req, res)
  //   }
    
    
  // });
    
})
    this.express.use(auth);
    this.express.use(bodyParser.json())
    // this.express.use(bodyParser.urlencoded({extended:true}))
    this.server.applyMiddleware({ cors:false,path:'/graphql',app: this.express });
    this.httpServer = http.createServer(this.express);
    /**
     * Installing subscription handlers
     */
    this.server.installSubscriptionHandlers(this.httpServer);
  }
}

export default Express;