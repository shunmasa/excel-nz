import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/index';
import Express from './config/express';
const express = require('express')
const next = require('next')
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
// const path = require('path')

//const path = require("path");
////const sendEmail = require('./server/sendEmail')
//const express = require("express");
// const app = express();
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


// app.use(express.static('client/build'));

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
/**
 * Initialize Express
 */

// sendEmail();
// app.post('/send', function (req, res) {
//   const name = req.body.name
//   console.log(name)
// })

const ExpressServer = new Express();
ExpressServer.init();

//web
// const nextApp = next({
//   dev: process.env.NODE_ENV !== 'production',
//   dir: __dirname,
// });
//console.log(__dirname) 
// const handle = nextApp.getRequestHandler()
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev ,dir: "./client" });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  
  const server = express()
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  

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

