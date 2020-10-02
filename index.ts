import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/index';
import Express from './config/express';
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });


const sendEmail = require('./server/sendEmail')
const express = require("express");
const app = express();
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

/**
 * Initialize Express
 */
sendEmail();
app.post('/send', function (req, res) {
  const name = req.body.name
  console.log(name)
})

const ExpressServer = new Express();
ExpressServer.init();

/**
 * Listen to port
 */
ExpressServer.httpServer.listen( 4020 || config.port, () => {
  console.log(`🚀  Server ready at ${config.port}`);
  console.log(
    `🚀 Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${config.port}${ExpressServer.server.subscriptionsPath}`
  );
});