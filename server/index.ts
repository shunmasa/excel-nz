import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/index';
import Express from './config/express';
// const express = require('express')
// const next = require('next')
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
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});




/**
 * Throw error when not able to connect to database
 */
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});


const ExpressServer = new Express();
ExpressServer.init();


const { PORT } = process.env;

  
  ExpressServer.httpServer.listen( 4020 || PORT , () => {
    console.log(`🚀  Server ready at ${ PORT }`);
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${ExpressServer.server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${ExpressServer.server.subscriptionsPath}`
    );
  });
 


