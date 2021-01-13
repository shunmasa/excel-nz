import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/index';
// import Express from './config/express';
// const express = require('express')
// const next = require('next')
const cors = require('cors')
import { ApolloServer } from 'apollo-server';
// const dotenv = require("dotenv");
// const next = require('next')
import schema from './graphql/schema/index';
import auth from './middleware/auth';
import express from 'express';
// dotenv.config({ path: "./config/config.env" });



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
  useFindAndModify:false,
  useCreateIndex: true,
});


const app = express();


/**
 * Throw error when not able to connect to database
 */
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

const server = new ApolloServer(schema);

app.use(auth);
 
app.use('*',cors());
// const { PORT } = process.env;

  
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
