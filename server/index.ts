import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/index';
import Express from './config/express';
const express = require('express')
const next = require('next')
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });



/**
 * Promisify All The Mongoose
 * @param mongoose
 */
Promise.promisifyAll(mongoose);

/**
 * Connecting Mongoose
 * @param uris
 * @param options
 */


mongoose.connect(config.db, {
  bufferMaxEntries: 0,
  keepAlive: true,
  reconnectInterval: 500,
  reconnectTries: 30,
  socketTimeoutMS: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
});




/**
 * Throw error when not able to connect to database
 */
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});


const ExpressServer = new Express();
ExpressServer.init();



const dev = process.env.NODE_ENV !== 'development';
const app = next({dev});
const handle = app.getRequestHandler();



app.prepare()
.then(() => {
  
  const server = express()

  server.get('/card/:studentDialog', (req, res) => {
    return app.render(req, res, '/card', { studentDialog: req.params.id })
  })
  server.get('/dashboard/:dashboard', (req, res) => {
    return app.render(req, res, '/dashboard', { dashboard: req.params.id })
  })

  



  server.get('*', (req, res) => {
    if (req.url === '/') {
      res.writeHead(200, {
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/plain'
        // 'Content-Type': 'text/event-stream',
      });
      res.write('data: Processing...\n\n');
      setTimeout(() => {
        res.write('data: Processing2...\n\n');
      }, 10000);
    } else {
      return handle(req, res)
    }
    
    
  });
  
  

  ExpressServer.httpServer.listen( 4020 || config.port, () => {
    console.log(`🚀  Server ready at ${config.port}`);
    console.log(
      `🚀 Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${config.port}${ExpressServer.server.subscriptionsPath}`
    );
  });
 
})

